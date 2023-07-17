import * as ActionType from "../ActionTypes"

export const counterincreament = () => (dispatch) => {
    dispatch({type: ActionType.INCREMNET_TYPE});
}

export const counterdicreament = () => (dispatch) => {
    dispatch({type: ActionType.DICREMNET_TYPE});
}