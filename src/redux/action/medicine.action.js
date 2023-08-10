import * as ActionType from "../ActionTypes"
import { setAlert } from "../slice/alertSlice"

export const fetchdata = () => (dispatch) => {
    try {
        dispatch(loading(true))
        setTimeout(() => {
            fetch("http://localhost:3004/medicines")
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong');
                })
                .then(data => {
                    dispatch({ type: ActionType.FETCH_MEDICINE, payload: data })
                })
                .catch(error => {
                    dispatch(errordata(error))
                })
        }, 3000)
    } catch (error) {
        console.log(error);
    }
}

export const adddata = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(data => {
                dispatch(setAlert({ text: 'Add Data', color: 'success' }))
                dispatch({ type: ActionType.ADD_MEDICINE, payload: data })
            })
            .catch(error => {
                dispatch(setAlert({ text: 'No Add Please Check Your process', color: 'error' }))
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const deletemedicine = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + id, {
            method: "DELETE",
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(() => {
                dispatch(setAlert({ text: 'delete Data', color: 'success' }))
                dispatch({ type: ActionType.DELETE_MEDICINE, payload: id })
            })
            .catch(error => {
                dispatch(setAlert({ text: 'No delete Please Check Your process', color: 'error' }))
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const updatemedicine = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then(() => {
                dispatch(setAlert({ text: 'Update Data', color: 'success' }))
                dispatch({ type: ActionType.UPDATE_MEDICINE, payload: data })
            })
            .catch(error => {
                dispatch(setAlert({ text: 'No Update Please Check Your process', color: 'error' }))
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const loading = (status) => (dispatch) => {
    dispatch({ type: ActionType.LOADING_MEDICINE, payload: status })
}

export const errordata = (errormaesage) => (dispatch) => {
    console.log(errormaesage);
    dispatch({ type: ActionType.ERROR_MEDICINE, payload: errormaesage })
}