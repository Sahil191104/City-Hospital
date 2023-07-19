import * as ActionType from "../ActionTypes"

export const fetchdata = () => (dispatch) => {
    try {
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

export const adddata = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
            })
    } catch (error) {
        console.log(error);
    }
}