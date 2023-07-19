import { combineReducers } from "redux";
import { counterreducer } from "./counter.reducer.js";
import { doctorsreducer } from "./doctor.reducer.js";

export const routerReducer = combineReducers ({
    couter: counterreducer,
    doctor: doctorsreducer
})