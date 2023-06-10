import axios from "axios";

const baseURL = "http://localhost:8000";

export function getToken() {
    const token = axios.get(`${baseURL}/auth/admin`);

    return token;
}