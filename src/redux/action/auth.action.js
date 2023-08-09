import * as ActionType from "../ActionTypes"

export const signupRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.SIGNUP_REQUEST, payload: data })
}

export const loginRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.LOGIN_REQUEST, payload: data })
}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({ type: ActionType.FORGOT_REQUEST, payload: data })
}