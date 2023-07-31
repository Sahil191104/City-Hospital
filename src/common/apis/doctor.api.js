import { addRequest, deleteRequest, getRequest, putRequest } from "../request"

export const getDoctorData = () => {
    return getRequest('Movie');
}

export const addDoctorData = (data) => {
    return addRequest('Movie', data);
}

export const deleteDoctorData = (data) => {
    return deleteRequest('Movie/'+data.id, data);
}

export const putDoctorData = (id) => {
    return putRequest('Movie/'+id);
}