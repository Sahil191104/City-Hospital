import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item: [],
    loading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            console.log(state,action);
            let items = state.item.some((v) => v.pid === action.payload.pid)
            console.log(items);
            if (items) {
                let index = state.item.findIndex((v) => v.pid === action.payload.pid);
                state.item[index].qyt++;
            } else {
                state.item.push(action.payload)
            }

            state.item = state.item,
                state.loading = state.false,
                state.error = state.null
        },
        increment: (state, action) => {
            console.log(state.item + action.payload);

            let incindex = state.item.findIndex((v) => v.pid === action.payload);
            state.item[incindex].qyt++;

            state.item = state.item,
                state.loading = state.false,
                state.error = state.null
        },
        decrement: (state, action) => {
            let incindex = state.item.findIndex((v) => v.pid === action.payload);
            state.item[incindex].qyt--;

            state.item = state.item,
                state.loading = state.false,
                state.error = state.null
        },
        remove: (state, action) => {
            state.item = state.item.filter((v) => v.pid != action.payload)
        }
    }
})

export const { increment, decrement, remove , addtocart} = cartSlice.actions;
export default cartSlice.reducer;