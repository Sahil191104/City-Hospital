import * as ActionType from "../ActionTypes"

const initState = {
    user: null,
    loading: false,
    error: null
}

export const authreducer = (state = initState, action) => {

    console.log(action);
    switch (action.type) {
        case ActionType.SIGNUP_REQUEST:
        case ActionType.LOGIN_REQUEST:
        case ActionType.LOGG_OUT:
            return {
                user: null,
                loading: true,
                error: null
            }
        case ActionType.EMAIL_VERIFICATION:
            return {
                user: null,
                loading: false,
                error: null
            }
        case ActionType.LOGGED_IN:
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case ActionType.LOGGOUt_RESPONSE:
            return {
                user: null,
                loading: false,
                error: null
            }
        case ActionType.AUTH_ERROR:
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}