import axios from "axios";

const baseURL = "http://localhost:8000";

export function login(data) {
    const response = axios.post(`${baseURL}/auth/admin`, data);

    return response;
}

export function getToken() {
    const token = axios.get(`${baseURL}/auth/admin`);

    return token;
}