import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initialState = {
    apt: [],
    loading: false,
    error: null
}

export const addAppointment = createAsyncThunk(
    'appointment/add',
    async (data) => {
        console.log(data.file.name);

        try {
            const storageRef = ref(storage, 'file/' + data.file.name);
            let iData = { ...data }
            await uploadBytes(storageRef, data.file).then(async(snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        iData = { ...data, file: url }
                        const docRef = await addDoc(collection(db, "appointment"), iData);

                        iData = {
                            id: docRef.id,
                            ...data,
                            file: data.file
                        }
                    })
            });



            // const docRef = await addDoc(collection(db, "appointment"), data);
            // return {
            //     id: docRef.id,
            //     ...data
            // }
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const getAppointment = createAsyncThunk(
    'appointment/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "appointment"));

            let data = []
            querySnapshot.forEach((doc) => {

                data.push({
                    id: doc.id,
                    ...doc.data()
                })
                console.log(data);
            });
            return data
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const deleteAppointment = createAsyncThunk(
    'appointment/delete',
    async (id) => {
        try {
            await deleteDoc(doc(db, "appointment", id));
            return id
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const updateAppointment = createAsyncThunk(
    'appointment/update',
    async (data) => {
        try {
            const appointmentRef = doc(db, "appointment", data.id);

            await updateDoc(appointmentRef, data);

            return data
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

const loadingAppointment = (state, action) => {
    state.loading = true;
    state.error = null;
}

const errorAppointment = (state, action) => {
    state.loading = false;
    state.error = action.error.message;
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAppointment.pending, (loadingAppointment))
            .addCase(addAppointment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.apt = state.apt.concat(action.payload)
            })
            .addCase(addAppointment.rejected, (errorAppointment))
            .addCase(getAppointment.pending, (loadingAppointment))
            .addCase(getAppointment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.apt = action.payload
            })
            .addCase(getAppointment.rejected, (errorAppointment))
            .addCase(deleteAppointment.pending, (loadingAppointment))
            .addCase(deleteAppointment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.apt = state.apt.filter((v) => v.id != action.payload)
            })
            .addCase(deleteAppointment.rejected, (errorAppointment))
            .addCase(updateAppointment.pending, (loadingAppointment))
            .addCase(updateAppointment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                let udata = state.apt.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
                state.apt = udata;
            })
            .addCase(updateAppointment.rejected, (errorAppointment))
    },
})

export default appointmentSlice.reducer;