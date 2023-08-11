import * as ActionType from "../ActionTypes"

export const signupRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.SIGNUP_REQUEST, payload: data })
}

export const emailVerification = () => (dispatch) => {
    dispatch({ type: ActionType.EMAIL_VERIFICATION})
}

export const loginRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.LOGIN_REQUEST, payload: data })
}

export const authError = (data) => (dispatch) => {
    dispatch({ type: ActionType.AUTH_ERROR, payload: data })
}

export const loggedIn = (data) => (dispatch) => {
    dispatch({ type: ActionType.LOGGED_IN, payload: data })
}

export const logoutrequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.LOGG_OUT, payload: data })
}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.FORGOT_REQUEST, payload: data })  
}