import { combineReducers } from "redux";
import { counterreducer } from "./counter.reducer.js";
import { doctorsreducer } from "./doctor.reducer.js";
import { medicinereducer } from "./medicine.reducer.js";
import { cartreducer } from "./cart.reducer.js";

export const routerReducer = combineReducers ({
    couter: counterreducer,
    doctor: doctorsreducer,
    medicine: medicinereducer,
    cart: cartreducer
})