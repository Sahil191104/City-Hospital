import * as ActionType from "../ActionTypes"

export const fetchdata = () => (dispatch) => {
    fetch("http://localhost:3004/Movie")
        .then(response => {
            return response.json()
        })
        .then(data => {
            dispatch({ type: ActionType.FETCH_TYPE, payload: data })
        })
        .catch(error => {
            console.log(error);
        })
}

export const adddata = () => (dispatch) => {
    try {

        method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        fetch("http://localhost:3004/Movie")
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch({ type: ActionType.FETCH_TYPE, payload: data })
            })
            .catch(error => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}