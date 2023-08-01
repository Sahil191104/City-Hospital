import { addDoctorData, deleteDoctorData, getDoctorData, putDoctorData } from "../../common/apis/doctor.api"
import * as ActionType from "../ActionTypes"

export const fetchdata = () => (dispatch) => {
    try {
        dispatch(loading(true))
        setTimeout(() => {
            getDoctorData()
                .then(response => {
                    dispatch({ type: ActionType.FETCH_TYPE, payload: response.data })
                })
                .catch(error => {
                    dispatch(errordata(error))
                })
            // fetch("http://localhost:3004/Movie")
            //     .then(response => {
            //         if (response.ok) {
            //             return response.json();
            //         }
            //         throw new Error('Something went wrong');
            //     })
            //     .then(data => {
            //         dispatch({ type: ActionType.FETCH_TYPE, payload: data })
            //     })
            //     .catch(error => {
            //         dispatch(errordata(error))
            //     })
        }, 3000)
    } catch (error) {
        console.log(error);
    }
}

export const adddata = (data) => (dispatch) => {
    try {
        addDoctorData(data)
            .then(response => {
                dispatch({ type: ActionType.ADD_TYPE, payload: response.data })
            })
            .catch(error => {
                dispatch(errordata(error))
            })
        // fetch("http://localhost:3004/Movie", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error('Something went wrong');
        //     })
        //     .then(data => {
        //         dispatch({ type: ActionType.ADD_TYPE, payload: data })
        //     })
        //     .catch(error => {
        //         dispatch(errordata(error))
        //     })
    } catch (error) {
        console.log(error);
    }
}

export const deletedoctors = (id) => (dispatch) => {
    try {
        deleteDoctorData(id)
            .then(() => {
                dispatch({ type: ActionType.DELETE_TYPE, payload: id })
            })
            .catch(error => {
                dispatch(errordata(error))
            })
        // fetch("http://localhost:3004/Movie/" + id, {
        //     method: "DELETE",
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error('Something went wrong');
        //     })
        //     .then(() => {
        //         dispatch({ type: ActionType.DELETE_TYPE, payload: id })
        //     })
        //     .catch(error => {
        //         dispatch(errordata(error))
        //     })
    } catch (error) {
        console.log(error);
    }
}

export const updatedoctors = (data) => (dispatch) => {
    try {
        putDoctorData(data)
            .then(
                dispatch({ type: ActionType.UPDATE_TYPE, payload: data })
            )
            .catch(error => {
                dispatch(errordata(error))
            })
        // fetch("http://localhost:3004/Movie/" + data.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error('Something went wrong');
        //     })
        //     .then(
        //         dispatch({ type: ActionType.UPDATE_TYPE, payload: data })
        //     )
        //     .catch(error => {
        //         dispatch(errordata(error))
        //     })
    } catch (error) {
        console.log(error);
    }
}

export const loading = (status) => (dispatch) => {
    dispatch({ type: ActionType.LOADING_TYPE, payload: status })
}

export const errordata = (errormaesage) => (dispatch) => {
    console.log(errormaesage);
    dispatch({ type: ActionType.ERROR_TYPE, payload: errormaesage })
}