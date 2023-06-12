import axios from "axios";
import Cookies from 'js-cookie';

const { token } = Cookies.get();

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
//Produto
export function getAllPosts() {
    const response = api.get(`/produto`);

    return response;
}

export function getProductById(id) {
    const response = api.get(`/produto/:${id}`);

    return response;
}

export function postProduto(data) {
    const response = api.post(`/produto`, data);

    return response;
}

//Cliente
export function getAllClients() {
    const response = api.get(`/cliente`);

    return response;
}

export function postCliente(data) {
    const response = api.post(`/cliente`, data);
    
    return response;
}