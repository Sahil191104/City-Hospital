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