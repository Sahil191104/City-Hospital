import * as ActionType from "../ActionTypes"

export const addcart = (id) => (dispatch) => {
    dispatch({ type: ActionType.ADD_TO_CART, payload: { pid: id, qyt:1} });
}