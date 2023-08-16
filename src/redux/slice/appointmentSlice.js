import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
    apt: [],
    loading: false,
    error: null
}

export const addAppointment = createAsyncThunk(
    'appointment/add',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "appointment"), {
                data
            });
            return {
                id: docRef.id,
                ...data
            }
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

const loadingDepartment = (state, action) => {
    state.loading = true;
    state.error = null;
}

const errorDepartment = (state, action) => {
    state.loading = false;
    state.error = action.error.message;
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAppointment.pending, (loadingDepartment))
            .addCase(addAppointment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.department = action.payload
            })
    },
})

export default appointmentSlice.reducer;