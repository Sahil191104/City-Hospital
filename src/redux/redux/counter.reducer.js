import * as ActionType from "../ActionTypes"

const initState = {
    count: 0
}

export const counterreducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.INCREMNET_TYPE:
            return { count: state.count + 1 }
        case ActionType.DICREMNET_TYPE:
            return { count: state.count - 1 }
        default:
            return state
    }
}