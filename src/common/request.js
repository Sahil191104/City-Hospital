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

export const addRequest = (path, data) => {
    console.log(data, path);
    return sendRequest({
        method: 'POST',
        url: path,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    })
}

export const deleteRequest = (path, id) => {
    return sendRequest({
        method: 'DELETE',
        url: path + id
    })
}

export const putRequest = (path, data) => {
    return sendRequest({
        method: 'PUT',
        url: path,
        data: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
}