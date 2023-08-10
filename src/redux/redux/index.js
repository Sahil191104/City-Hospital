import { combineReducers } from "redux";
import counterReducer from "../slice/counterSlice";
import { doctorsreducer } from "./doctor.reducer.js";
import { medicinereducer } from "./medicine.reducer.js";
import cartReducer from "../slice/cartSlice";
import departmentReducer from "../slice/departmentSlice";
import alertReducer from "../slice/alertSlice";

export const rootReducer = combineReducers({
    alert: alertReducer,
    couter: counterReducer,
    doctor: doctorsreducer,
    medicine: medicinereducer,
    cart: cartReducer,
    department: departmentReducer
})