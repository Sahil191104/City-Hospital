import * as ActionType from "../ActionTypes"

const initState = {
    item: [],
    loading: false,
    error: null
}

export const cartreducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ADD_TO_CART:

            let items = state.item.some((v) => v.pid === action.payload.pid)
            console.log(items);
            if (items) {
                let index = state.item.findIndex((v) => v.pid === action.payload.pid);
                state.item[index].qyt++;
            } else {
                state.item.push(action.payload)
            }

            return {
                item: state.item,
                loading: false,
                error: null
            }
        default:
            return state
    }
}