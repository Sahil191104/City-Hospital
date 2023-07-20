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
                dispatch({ type: ActionType.ADD_TYPE, payload: data })
            })
    } catch (error) {
        console.log(error);
    }
}

export const deletedoctors = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Movie/" + id, {
            method: "DELETE",
        })
            .then(() => {
                dispatch({ type: ActionType.DELETE_TYPE, payload: id })
            })
            .catch(error => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

export const updatedoctors = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/Movie/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(
                dispatch({ type: ActionType.UPDATE_TYPE, payload: data })
            )
            .catch(error => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}