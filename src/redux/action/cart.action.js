import * as ActionType from "../ActionTypes"

export const addcart = (id) => (dispatch) => {
    dispatch({ type: ActionType.ADD_TO_CART, payload: { pid: id, qyt: 1 } });
}

export const incretcart = (id) => (dispatch) => {
    dispatch({ type: ActionType.INC_QYT, payload: id });
}

export const decrecart = (id) => (dispatch) => {
    dispatch({ type: ActionType.DEC_QYT, payload: id })
}

export const removecart = (id) => (dispatch) => {
    dispatch({ type: ActionType.REMOVE_ITEM, payload: id })
}