import dayjs from "dayjs";
import {dateFormat} from "../utils/variable";
import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
    booking: {
        type: 'one-way',
        date: dayjs().add(30, "minutes").format(dateFormat),
        pickup: {
            address: {
                street: '',
            },
            co_ordinate: {
                lat: null,
                lng: null,
            },
        },
        drop: {
            address: {
                street: '',
            },
            co_ordinate: {
                lat: null,
                lng: null,
            },
        },
        basic_fare: 0,
        total_fare: 0,
        distance: 0,
        cab: {}
    },
    user:{},
    loadingBookingFare: false,
    cabs: [],
};

const booking = (state = initialState, action) => {

    let newState = {};
    switch (action.type) {

        case actionTypes.SAVE_PICKUP_ADDRESS:        
            newState = { ...state };
            
            let pickup = {...state.booking.pickup};
            pickup.address.street = action.pickup.address.street;
            pickup.co_ordinate.lat = action.pickup.co_ordinate.lat;
            pickup.co_ordinate.lng = action.pickup.co_ordinate.lng;
            newState.booking.pickup = {...pickup};

            return newState;

        case actionTypes.SAVE_DROP_ADDRESS:
            newState = { ...state };
            
            let drop = { ...state.booking.drop };
            drop.address.street = action.drop.address.street;
            drop.co_ordinate.lat = action.drop.co_ordinate.lat;
            drop.co_ordinate.lng = action.drop.co_ordinate.lng;
            newState.booking.drop = { ...drop };

            return newState;

        // case actionTypes.SAVE_BOOKING:
        //     newState = { ...state };
            
        //     let booking = {...newState.booking}
        //     booking.pickup = action.booking.pickup;
        //     booking.drop = action.booking.drop;
        //     booking.date = action.booking.date;
        //     booking.type = action.booking.type;
        //     newState.booking = {...booking};

        //     return newState
        
        case actionTypes.SAVE_BOOKING_DATE:
            newState = {...state};
            newState.booking.date = action.date;
            return newState;
        
        case actionTypes.SAVE_BOOKING_TYPE:
            newState = { ...state };
            newState.booking.type = action.booking_type;
            return newState;

        case actionTypes.GET_BOOKING_CABS:
            newState = {...state};
            newState.loadingBookingFare = true;
            return newState;

        case actionTypes.SAVE_BOOKING_CABS:
            newState = {...state};
            newState.cabs = action.cabs;
            newState.loadingBookingFare = false;
            newState.booking.distance = action.distance;
            return newState;

        default:
            return state;
    }
}

export default booking;