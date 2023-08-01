import { addRequest, deleteRequest, getRequest, putRequest } from "../request"

export const getDoctorData = () => {
    return getRequest('Movie');
}

export const addDoctorData = (data) => {
    return addRequest('Movie', data);
}

export const deleteDoctorData = (id) => {
    return deleteRequest('Movie/' + id);
}

export const putDoctorData = (data) => {
    return putRequest('Movie/' + data.id, data);
}