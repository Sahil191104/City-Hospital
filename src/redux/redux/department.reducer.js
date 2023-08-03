import * as ActionType from "../ActionTypes"

const initState = {
    department: [],
    loading: false,
    error: null
}

export const departmentreducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ERROR_TYPE:
            return {
                department: [],
                loading: false,
                error: action.payload
            }
        case ActionType.LOADING_TYPE:
            return {
                department: [],
                loading: action.payload,
                error: null
            }
        case ActionType.FETCH_TYPE:
            return { ...state, department: action.payload, loading: false }
        case ActionType.ADD_TYPE:
            return { ...state, department: state.department.concat(action.payload) }
        case ActionType.DELETE_TYPE:
            return { ...state, department: state.department.filter((v) => v.id != action.payload) }
        case ActionType.UPDATE_TYPE:
            return {
                ...state, department: state.department.map((v) => {
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