import * as ActionType from "../ActionTypes"

const initState = {
    user: null,
    loading: false,
    error: null
}

export const signupreducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.SIGNUP_REQUEST:
            return {
                ...state
            }
        default:
            return state
    }
}