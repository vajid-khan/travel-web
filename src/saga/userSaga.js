import { put, call } from "redux-saga/effects";
import { userAxios } from "../axios/axios";
import * as actionsTypes from "../store/actions/actionTypes";

// userAxios.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;  

export function* checkAuthSaga() {

    let token = yield localStorage.getItem('token');

    if (!token) {
        return;
    }
    let response = yield call (getUserWithTokenApi, token);

    if (response.type == actionsTypes.FAILED_AUTO_AUTH) {
        //clear localstorage
        yield call(logoutUserSaga, token);
        //clear state
        yield put({type: actionsTypes.FAILED_AUTO_AUTH});
    } else {
        yield put(response);    
    }
}

export function* logoutUserSaga() {
    yield localStorage.removeItem('token');
    yield put({
        type: actionsTypes.AUTH_LOGOUT
    });
}

export function* loginUserSaga(action) {
    let response = yield call(loginApi,{
        email: action.email,
        password: action.password
    });
    
    if (!response.error) {
        yield call(saveInStorage, { token: response.data.token });
        yield document.cookie = `token=${response.data.token}; path=/`;
    }
    yield put(response);
}

const saveInStorage = data => {
    for(let i in data) {
        localStorage.setItem(i, data[i]);
    }
}

const getUserWithTokenApi = token => {
    return userAxios('user-detail', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.data)
    .then( res => {
        return {
            type: actionsTypes.AUTO_AUTH,
            token: token,
            user: res.user
        };
    })
    .catch(error => {
        return {
            type: actionsTypes.FAILED_AUTO_AUTH,
            error: 'Session expired, Login Again',
        };
    })
}

const loginApi = credentail => {
    return userAxios('sign-in', {
        data: credentail,
    })
    .then(response => response.data)
    .then(data => {

        if (!data.error) {
            return {
                type: actionsTypes.LOGIN_USER,
                data: data,
            };
        } else {
            return {
                type: actionsTypes.FAILED_LOGIN,
                error: 'Invalid email or password',
            }
        }
        
    })
    .catch(error => {
        return {
            type: actionsTypes.FAILED_LOGIN,
            error: 'Something isn\'t working, We are looking into it',
        };
    });
}

export function* userProfileUpdateSaga(action) {
    yield call(userProfileUpdateApi, action.data);
}

const userProfileUpdateApi = data => {
    return userAxios('profile-update', {
        data: data,
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.data)
    .then(data => {
        console.log(data);
    })
    .catch(error => {

    });
}

export function* checkUniqueEmailSaga(action) {

    let response = yield call(checkUniqueEmailApi, action.email);
    if (response) {
        yield put(response);
    }
}

const checkUniqueEmailApi = email => {
    return userAxios('check-unique-email', {
        data: {
            email: email
        },
    })
    .then(response => response.data)
    .then(data => {
        return {
            type: actionsTypes.CHECK_UNIQUE_EMAIL,
            error:data.error,
            message:data.message
        }
    })
    .catch(error => {

    });
}

export function* resisterUserSaga(action) {
    let response = yield call(registerUserApi,action);
    if (response) {
        yield call(saveInStorage, { token: response.data.token });

        yield put(response);
    }

}

const registerUserApi = ({name, email, password}) => {
    return userAxios('register', {
        data: {
            name: name,
            email: email,
            password: password
        },
    })
    .then(response => response.data)
    .then(data => {
        return {
            type:actionsTypes.LOGIN_USER,
            data: data
        }
    })
    .catch(error => {

    });
}