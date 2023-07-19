import * as ActionType from "../ActionTypes"

const initState = {
    doctor: [],
    loading: false,
    error: null
}

export const doctorsreducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.FETCH_TYPE:
            return { ...state, doctor: action.payload }
        default:
            return state
    }
}