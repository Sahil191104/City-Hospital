import { combineReducers } from "redux";
import { doctorsreducer } from "./doctor.reducer.js";
import { medicinereducer } from "./medicine.reducer.js";
import cartReducer from "../slice/cartSlice";
import departmentReducer from "../slice/departmentSlice";
import appointmentRducer from "../slice/appointmentSlice.js";
import alertReducer from "../slice/alertSlice";
import { authreducer } from "./auth.reducer";
import { favoriteReducer } from "./favorite.reducer.js";

export const rootReducer = combineReducers({
    alert: alertReducer,
    auth:authreducer,
    doctor: doctorsreducer,
    medicine: medicinereducer,
    cart: cartReducer,
    department: departmentReducer,
    apt: appointmentRducer,
    fav: favoriteReducer
})