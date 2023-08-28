import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDepartmentData, deleteDepartmentData, errorDepartmentData, getDepartmentData, loadingDepartmentData, putDepartmentData } from '../../common/apis/department.api';
import { db, storage } from '../../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage';

const initialState = {
    department: [],
    loading: false,
    error: null
}

export const fetchDepartment = createAsyncThunk(
    'department/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "department"));

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

        // await new Promise((resolve, rejecte) => setTimeout(resolve, 2000))
        // const response = await getDepartmentData();
        // return response.data
    }
)

export const addDepartment = createAsyncThunk(
    'department/add',
    async (data) => {
        console.log(data.file.name);

        try {
            const rNo = Math.floor(Math.random() * 100000000);
            const storageRef = ref(storage, 'file/' + rNo + '_' + data.file.name);
            let iData = { ...data }
            await uploadBytes(storageRef, data.file).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        iData = { ...data, file: url, "File_Name": rNo + '_' + data.file.name }
                        const docRef = await addDoc(collection(db, "department"), iData);

                        iData = {
                            id: docRef.id,
                            ...data,
                            file: data.file,
                            "File_Name": rNo + '_' + data.file.name
                        }
                    })
            });
            return iData;
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // const response = await addDepartmentData(data);
        // console.log("axsacdsv");
        // return response.data
    }
)

export const updateDepartment = createAsyncThunk(
    'department/update',
    async (data) => {
        try {
            if (typeof data.file === 'string') {
                const departmentRef = doc(db, "department", data.id);

                await updateDoc(departmentRef, data);

                return data
            } else {
                const desertRef = ref(storage, 'file/' + data.File_Name);
                console.log(desertRef);
                let iData = { ...data }

                await deleteObject(desertRef).then(async () => {
                    const rNo = Math.floor(Math.random() * 100000000);
                    const storageRef = ref(storage, 'file/' + rNo + '_' + data.file.name);
                    console.log("Delete Old File");

                    await uploadBytes(storageRef, data.file).then(async (snapshot) => {
                        console.log('New Upload File Uploaded a blob or file!');

                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                iData = { ...data, file: url, "File_Name": rNo + '_' + data.file.name }

                                const departmentRef = doc(db, "department", data.id);
                                await updateDoc(departmentRef, iData);

                                iData = {
                                    ...data,
                                    file: data.file,
                                    "File_Name": rNo + '_' + data.file.name
                                }
                            })
                    });

                    console.log('New Upload File Uploaded');

                    // console.log("File deleted successfully");
                    // await deleteDoc(doc(db, "appointment", data.id));
                    // return data.id
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
                console.log(iData);
                return iData;

            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // const response = await putDepartmentData(data);
        // return response.data
    }
)

export const deleteDepartment = createAsyncThunk(
    'department/delete',
    async (data) => {
        console.log(data);
        try {
            const desertRef = ref(storage, 'file/' + data.File_Name);
            console.log(desertRef);
            await deleteObject(desertRef).then(async () => {
                console.log("File deleted successfully");
                await deleteDoc(doc(db, "department", data.id));
                return data.id
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });

            // await deleteDoc(doc(db, "appointment", id));
            // return id
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // const response = await deleteDepartmentData(id);
        // return response.id
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

export const departmentSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartment.pending, (loadingDepartment))
            .addCase(fetchDepartment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.department = action.payload
            })
            .addCase(fetchDepartment.rejected, (errorDepartment))
            .addCase(addDepartment.pending, (loadingDepartment))
            .addCase(addDepartment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.department = state.department.concat(action.payload)
            })
            .addCase(addDepartment.rejected, (errorDepartment))
            .addCase(updateDepartment.pending, (loadingDepartment))
            .addCase(updateDepartment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                let udata = state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
                state.department = udata;
            })
            .addCase(updateDepartment.rejected, (errorDepartment))
            .addCase(deleteDepartment.pending, (loadingDepartment))
            .addCase(deleteDepartment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.department = state.department.filter((v) => v.id != action.payload)
            })
            .addCase(deleteDepartment.rejected, (errorDepartment))
    },
})

export default departmentSlice.reducer;