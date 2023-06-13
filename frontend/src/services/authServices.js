import axios from "axios";

const baseURL = "https://easystock-api.onrender.com";

export async function login(data) {
    const response = await axios.post(`${baseURL}/auth/admin`, data);

    return response;
}

export async function getUsernameFromToken(data) {
    const response = await axios.post(`${baseURL}/auth/validate`, data);

    return response;
}