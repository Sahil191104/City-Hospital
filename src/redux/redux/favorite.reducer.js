import * as ActionTypes from '../ActionTypes'

const initState = {
    fav: [],
    loading: false,
    error: null,
}

export const favoriteReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.FAVORITE_ADD:
            let item = state.fav.find((v) => v.fid === action.payload.fid)
            console.log(item);
            let newD;
            if (item) {
                newD = state.fav.filter((v) => v.fid !== action.payload.fid)
                state.fav = newD
            } else {
                state.fav.push(action.payload)
            }
            console.log(item, state, newD);
            return {
                fav: state.fav,
                error: null,
                loading: false
            }

        case ActionTypes.FAVORITE_REMOVE:
            return {
                ...state,
                fav: state.fav.filter((v) => v.fid !== action.payload)
            }
        default:
            return state;
    }
}