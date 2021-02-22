import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
    token: null,
    user: {},
    error: {},
    processing: false,
    auth_processing: false,
};

const user = (state = initialState, action) => {

    let newState = {};
    switch(action.type) {

        case actionTypes.AUTO_AUTH:
            newState = { ...state };
            newState.token = action.token;
            newState.user = action.user;
            return newState;
        
        case actionTypes.FAILED_AUTO_AUTH:
            newState = initialState;
            return newState;
        
        case actionTypes.INIT_AUTH_LOGOUT:
            newState = { ...state };
            newState.auth_processing = true;
            return newState;

        case actionTypes.AUTH_LOGOUT:
            newState = initialState;
            return newState;

        case actionTypes.INIT_LOGIN_USER:
            newState = {...state};
            newState.auth_processing = true;
            newState.error = {};
            return newState;
        
        case actionTypes.LOGIN_USER:
            newState = {...state};
            newState.auth_processing = false;
            newState.token = action.data.token
            newState.user = action.data.user;
            return newState;

        case actionTypes.FAILED_LOGIN:
            newState = {...state};
            newState.processing = false;
            newState.auth_processing = false;
            newState.error = {...newState.error};
            newState.error.login_error = action.error;
            return newState;
        
        case actionTypes.FAILED_AUTO_AUTH:
            newState = {...state};
            newState.auth_processing = false;
            newState.error = {...newState.error};
            newState.error.login_error = action.error;
            return newState;

        case actionTypes.INIT_CHECK_UNIQUE_EMAIL:
            newState = { ...state };
            newState.error = {};
            newState.processing = true;
            return newState; 
        
        case actionTypes.CHECK_UNIQUE_EMAIL:
            newState = { ...state };
            newState.error = {...newState.error};
            newState.error.unique_email = action.message;
            newState.processing = false;
            return newState; 
        
        case actionTypes.INIT_REGISTER_USER:
            newState = { ...state };
            newState.auth_processing = true;
            return newState;
        
        case actionTypes.REGISTER_USER:
            newState = { ...state };
            newState.auth_processing = false;
            newState.token = action.data.token;
            newState.user = action.data.user;
            return newState;

        case actionTypes.INIT_PROFILE_UPDATE:
            newState = { ...state };
            newState.processing = true;
            return newState;


        default:
            return state;
    }
}

export default user;