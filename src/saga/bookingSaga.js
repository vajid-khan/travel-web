import { put, call } from "redux-saga/effects";
import { bookingAxios } from "../axios/axios";
import * as actionsTypes from "../store/actions/actionTypes";

export function* getBookingCab(action) {

    const pickup_co_ordinate = action.data.source;
    const drop_co_ordinate = action.data.destination;
    let response = yield call(getBookingCabApi, pickup_co_ordinate, drop_co_ordinate);
    yield put(response);
}

const getBookingCabApi = (pick_co_ordinate, drop_co_ordinate) => {
    return bookingAxios('booking-cabs', {
        data: {
            pickup: pick_co_ordinate,
            drop: drop_co_ordinate
        }
    })
    .then(response => response.data)
    .then(data => {
        return {
            type: actionsTypes.SAVE_BOOKING_CABS,
            cabs: data.cabs,
            distance: data.distance,
        }
    })
    .catch(error => {
        return {
            type: actionsTypes.ERROR_GETTING_BOOKING_CABS
        }
    })
}