import { addRequest, deleteRequest, errorRequest, getRequest, loadingRequest, putRequest } from "../request"

export const getDepartmentData = () => {
    return getRequest('department');
}

export const addDepartmentData = (data) => {
    return addRequest('department', data);
}

export const deleteDepartmentData = (id) => {
    return deleteRequest('department/' , id);
}

export const putDepartmentData = (data) => {
    return putRequest('department/' + data.id, data);
}

// export const loadingDepartmentData = (status) => {
//     return loadingRequest('department', status);
// }

// export const errorDepartmentData = (errormaesage) => {
//     return errorRequest('department', errormaesage);
// }