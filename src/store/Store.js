import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import booking from "../reducers/bookingReducer";
import user from "../reducers/userReducer";

//saga
import createSagaMiddleware from "redux-saga";
import wathAuth from "../saga/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
        bookingData: booking,
        user: user
    }
)

const Store = createStore(rootReducers, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(wathAuth);

export default Store;