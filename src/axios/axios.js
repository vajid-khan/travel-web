import axios from "axios";

const API_END_POINT = 'http://localhost:8000/api/'; 

export const userAxios = axios.create({
    baseURL: API_END_POINT,
    method:'post',
    headers: {
        'Accept': 'application/json',
    },
});

export const bookingAxios = axios.create({
    baseURL: API_END_POINT,
    method: 'post',
    headers: {
        'Accept': 'application/json',
    },
});