import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../store/actions/actionTypes";

import {
    loginUserSaga, 
    resisterUserSaga,
    checkAuthSaga,
    logoutUserSaga,
    userProfileUpdateSaga,
    checkUniqueEmailSaga
} from "./userSaga";

import {
    getBookingCab,
} from "./bookingSaga";

export default function* watchAuth() {
    yield takeLatest(actionTypes.CHECK_AUTH, checkAuthSaga);
    yield takeLatest(actionTypes.INIT_LOGIN_USER, loginUserSaga);
    yield takeLatest(actionTypes.INIT_REGISTER_USER, resisterUserSaga);
    yield takeLatest(actionTypes.INIT_AUTH_LOGOUT, logoutUserSaga);
    yield takeLatest(actionTypes.INIT_PROFILE_UPDATE, userProfileUpdateSaga);
    yield takeLatest(actionTypes.INIT_CHECK_UNIQUE_EMAIL, checkUniqueEmailSaga);

    yield takeLatest(actionTypes.GET_BOOKING_CABS, getBookingCab);
}