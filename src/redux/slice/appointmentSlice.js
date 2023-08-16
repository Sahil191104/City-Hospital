const initialState = {
    apt: [],
    loading: false,
    error: null
}

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
            .addCase(apt.pending, (loadingDepartment))
            .addCase(apt.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.department = action.payload
            })
    },
})

export default appointmentSlice.reducer;