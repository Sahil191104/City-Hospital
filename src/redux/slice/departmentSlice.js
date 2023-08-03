import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDepartmentData, deleteDepartmentData, errorDepartmentData, getDepartmentData, loadingDepartmentData, putDepartmentData } from '../../common/apis/department.api';

const initialState = {
    department: [],
    loading: false,
    error: null
}

export const fetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {
        await new Promise((resolve, rejecte) => setTimeout(resolve, 2000))
        const response = await getDepartmentData();
        return response.data
    }
)

export const addDepartment = createAsyncThunk(
    'department/add',
    async (data) => {
        const response = await addDepartmentData(data);
        console.log("axsacdsv");
        return response.data
    }
)

export const updateDepartment = createAsyncThunk(
    'department/update',
    async (data) => {
        const response = await putDepartmentData(data);
        return response.data
    }
)

export const deleteDepartment = createAsyncThunk(
    'department/delete',
    async (id) => {
        const response = await deleteDepartmentData(id);
        return response.id
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
                console.log(action);
                state.department = action.payload
            })
            .addCase(fetchDepartment.rejected, (errorDepartment))
            .addCase(addDepartment.pending, (loadingDepartment))
            .addCase(addDepartment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action);
                state.department = state.department.concat(action.payload)
            })
            .addCase(addDepartment.rejected, (errorDepartment))
            .addCase(updateDepartment.pending, (loadingDepartment))
            .addCase(updateDepartment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action);
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
                console.log(action);
                let deletedata = state.department.filter((v) => v.id != action.payload)
                state.department = deletedata
            })
            .addCase(deleteDepartment.rejected, (errorDepartment))
    },
})

export default departmentSlice.reducer;