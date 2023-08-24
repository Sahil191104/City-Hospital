import * as ActionTypes from '../ActionTypes'

export const addfav = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: ActionTypes.FAVORITE_ADD , payload:{fid: id}})
}

export const removeToFav = (id) => (dispatch) => {
    dispatch({type : ActionTypes.FAVORITE_REMOVE , payload : id})
}