import * as ActionType from "../ActionTypes"

const initState = {
    doctor: [],
    loading: false,
    error: null
}

export const doctorsreducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ERROR_TYPE:
            return {
                doctor: [],
                loading: false,
                error: action.payload
            }
        case ActionType.LOADING_TYPE:
            return {
                doctor: [],
                loading: action.payload,
                error: null
            }
        case ActionType.FETCH_TYPE:
            return { ...state, doctor: action.payload, loading: false }
        case ActionType.ADD_TYPE:
            return { ...state, doctor: state.doctor.concat(action.payload) }
        case ActionType.DELETE_TYPE:
            return { ...state, doctor: state.doctor.filter((v) => v.id != action.payload) }
        case ActionType.UPDATE_TYPE:
            return {
                ...state, doctor: state.doctor.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
            }
        default:
            return state
    }
}