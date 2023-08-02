import axios from 'axios';
import { BASE_URL } from '../utils/BaseURL';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

const sendRequest = (config) => {
    return instance.request(config)
}

export const getRequest = (path) => {
    return sendRequest({
        method: 'GET',
        url: path
    })
}

export const addRequest = (data, path) => {
    return sendRequest({
        method: 'POST',
        url: path,
        data: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
}

export const deleteRequest = (path) => {
    return sendRequest({
        method: 'DELETE',
        url: path
    })
}

export const putRequest = (data, path) => {
    return sendRequest({
        method: 'PUT',
        url: path,
        data: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
}

// export const loadingRequest = (path, status) => {
//     return sendRequest({
//         method: 'LOADING',
//         url: path,
//         data: JSON.stringify(status),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
// }

// export const errorRequest = (path, errormaesage) => {
//     return sendRequest({
//         method: 'ERROR',
//         url: path,
//         data: JSON.stringify(errormaesage),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
// }