import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDepartmentData, deleteDepartmentData, getDepartmentData, putDepartmentData } from '../../common/apis/department.api';

const initialState = {
    department: [],
    loading: false,
    error: null
}

export const fetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {
        const response = await getDepartmentData();
        return response.data
    }
)

export const addDepartment = createAsyncThunk(
    'department/add',
    async (data) => {
        const response = await addDepartmentData(data);
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

export const departmentSlice = createSlice({
    name: 'department',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.department = action.payload
            })
            .addCase(addDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.department = state.department.concat(action.payload)
            })
            .addCase(updateDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
            })
            .addCase(deleteDepartment.fulfilled, (state, action) => {
                console.log(action);
                state.department.filter((v) => v.id != action.payload)
            })
    },
})

export default departmentSlice.reducer;