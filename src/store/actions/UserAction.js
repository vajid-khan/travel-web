import * as actionTypes from "./actionTypes";

export const loginUser = ({email, password}) => {
    return {
        type: actionTypes.INIT_LOGIN_USER,
        email: email,
        password: password
    }
}

export const checkUniqueEmail = email => {
    return {
        type: actionTypes.INIT_CHECK_UNIQUE_EMAIL,
        email: email,
    }
}

export const registerUser = ({ name, email, password }) => {
    return {
        type: actionTypes.INIT_REGISTER_USER,
        name: name,
        email: email,
        password: password
    }
}

export const checkAuth = () => {
    return {
        type: actionTypes.CHECK_AUTH,
    }
}

export const logout = () => {
    return {
        type: actionTypes.INIT_AUTH_LOGOUT,
    }
}

export const profileUpdate = data => {
    return {
        type: actionTypes.INIT_PROFILE_UPDATE,
        data:data
    }
}