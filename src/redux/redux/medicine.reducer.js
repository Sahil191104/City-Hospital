import * as ActionType from "../ActionTypes"

const initState = {
    medicine: [],
    loading: false,
    error: null
}

export const medicinereducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ERROR_MEDICINE:
            return {
                medicine: [],
                loading: false,
                error: action.payload
            }
        case ActionType.LOADING_MEDICINE:
            return {
                medicine: [],
                loading: action.payload,
                error: null
            }
        case ActionType.FETCH_MEDICINE:
            return { ...state, medicine: action.payload, loading: false }
        case ActionType.ADD_MEDICINE:
            return { ...state, medicine: state.medicine.concat(action.payload) }
        case ActionType.DELETE_MEDICINE:
            return { ...state, medicine: state.medicine.filter((v) => v.id != action.payload) }
        case ActionType.UPDATE_MEDICINE:
            return {
                ...state, medicine: state.medicine.map((v) => {
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