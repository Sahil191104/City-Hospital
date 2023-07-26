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
        case ActionType.INC_QYT:
            console.log(state.item + action.payload);

            let incindex = state.item.findIndex((v) => v.pid === action.payload);
            state.item[incindex].qyt++;

            return {
                item: state.item,
                loading: false,
                error: null
            }
        case ActionType.DEC_QYT:
            console.log(state.item + action.payload);

            let decindex = state.item.findIndex((v) => v.pid === action.payload);
            state.item[decindex].qyt--;

            return {
                item: state.item,
                loading: false,
                error: null
            }
        case ActionType.REMOVE_ITEM:

            return {
                item: state.item.filter((v) => v.pid != action.payload)
            }
        default:
            return state
    }
}