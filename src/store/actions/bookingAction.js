import * as actionTypes from "./actionTypes";

export const savePickAddress = address => {
    return {
        type: actionTypes.SAVE_PICKUP_ADDRESS,
        pickup: address
    }
}

export const saveDropAddress = address => {
    return {
        type: actionTypes.SAVE_DROP_ADDRESS,
        drop: address
    }
}

export const saveBookingDate = (date) => {
    return {
        type: actionTypes.SAVE_BOOKING_DATE,
        date: date,
    }
}

export const saveBookingType = booking_type => {
    return {
        type: actionTypes.SAVE_BOOKING_TYPE,
        booking_type: booking_type
    }
}

export const saveBookingData = booking => {
    return {
        type: actionTypes.SAVE_BOOKING,
        booking: booking
    }
}

export const getBookingCabs = data => {
    return {
        type: actionTypes.GET_BOOKING_CABS,
        data: data
    }
}