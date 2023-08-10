import { getDepartmentData, deleteDepartmentData, putDepartmentData, addDepartmentData } from "../../common/apis/department.api"
import * as ActionType from "../ActionTypes"
import { setAlert } from "../slice/alertSlice"

export const fetchdata = () => (dispatch) => {
    try {
        dispatch(loading(true))
        setTimeout(() => {
            getDepartmentData()
                .then(response => {
                    dispatch({ type: ActionType.FETCH_TYPE, payload: response.data })
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
        addDepartmentData(data)
            .then(response => {
                dispatch(setAlert({ text: 'Add Data', color: 'success' }))
                dispatch({ type: ActionType.ADD_TYPE, payload: response.data })
            })
            .catch(error => {
                dispatch(setAlert({ text: 'No Add Please Check Your process', color: 'error' }))
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const deletedepartment = (id) => (dispatch) => {
    try {
        deleteDepartmentData(id)
            .then(() => {
                dispatch(setAlert({ text: 'delete Data', color: 'success' }))
                dispatch({ type: ActionType.DELETE_TYPE, payload: id })
            })
            .catch(error => {
                dispatch(setAlert({ text: 'No delete Please Check Your process', color: 'error' }))
                dispatch(errordata(error))
            })
    } catch (error) {
        console.log(error);
    }
}

export const updatedepartment = (data) => (dispatch) => {
    try {
        putDepartmentData(data)
            .then(() => {
                dispatch(setAlert({ text: 'Update Data', color: 'success' }))
                dispatch({ type: ActionType.UPDATE_TYPE, payload: data })
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
    dispatch({ type: ActionType.LOADING_TYPE, payload: status })
}

export const errordata = (errormaesage) => (dispatch) => {
    console.log(errormaesage);
    dispatch({ type: ActionType.ERROR_TYPE, payload: errormaesage })
}