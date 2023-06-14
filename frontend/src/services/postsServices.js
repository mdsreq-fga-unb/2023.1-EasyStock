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

export function searchProduct(nomeProduto) {
    const response = api.get(`/produto/buscar`, { params: { nome: nomeProduto } });

    return response;
}

export function getProductByPdv(pdv) {
    const response = api.get(`/produto/:${pdv}`);

    return response;
}

export function postProduto(data) {
    const response = api.post(`/produto`, data);

    return response;
}

export function updateProduto(pdv, data) {
    const response = api.patch(`/produto/${pdv}`, data)

    return response;
}

export function deleteProduto(pdv) {
    const response = api.delete(`/produto/${pdv}`);

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

export function updateCliente(id, data){
    const response = api.patch(`/cliente/${id}`, data)

    return response;
}

export function deleteCliente(id) {
    const response = api.delete(`/cliente/${id}`);

    return response;
}