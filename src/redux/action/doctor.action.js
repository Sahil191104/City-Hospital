import * as ActionType from "../ActionTypes"

export const fetchdata = () => (dispatch) => {
    dispatch({type: ActionType.FETCH_TYPE});
}