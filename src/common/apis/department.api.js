import { addRequest, deleteRequest, getRequest, putRequest } from "../request"

export const getDepartmentData = () => {
    return getRequest('department');
}

export const addDepartmentData = (data) => {
    return addRequest('department', data);
}

export const deleteDepartmentData = (id) => {
    return deleteRequest('department/' + id);
}

export const putDepartmentData = (data) => {
    return putRequest('department/' + data.id, data);
}