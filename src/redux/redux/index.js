import { combineReducers } from "redux";
import { counterreducer } from "./counter.reducer.js";

export const routerReducer = combineReducers ({
    couter: counterreducer
})