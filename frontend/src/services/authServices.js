import axios from "axios";
import swal from 'sweetalert';

const baseURL = "https://easystock-api.onrender.com";

export async function login(data) {
    const response = await axios.post(`${baseURL}/auth/login`, data)
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export async function getUsernameFromToken(data) {
    const response = await axios.post(`${baseURL}/auth/validate`, data);

    return response;
}