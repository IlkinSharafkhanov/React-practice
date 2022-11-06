import { applyMiddleware, combineReducers, createStore } from "redux";
import {cardReducer} from "./reducers/cardReducer"
import logger from "redux-logger";
import { counterReducer } from "./reducers/counterReducer";
// import { configureStore } from "@reduxjs/toolkit";


const allReducers = combineReducers({
    cardData: cardReducer,
    counterData: counterReducer
})

// const loggerMid = applyMiddleware(logger)
export const store = createStore(allReducers, applyMiddleware(logger))
// export const store = configureStore({
//     middleware: loggerMid,
//     reducer: allReducers
// })