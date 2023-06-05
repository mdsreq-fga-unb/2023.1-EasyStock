import axios from "axios";

const baseURL = "http://localhost:8000";

export function getAllPosts() {
    const response = axios.get(`${baseURL}/produto`);

    return response;
}
