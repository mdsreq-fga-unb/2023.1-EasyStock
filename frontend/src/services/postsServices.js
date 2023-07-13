import axios from "axios";
import Cookies from 'js-cookie';
import swal from 'sweetalert';

const { token } = Cookies.get();

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
//Produto
export function getAllPosts() {
    const response = api.get(`/produto`)
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function searchProduct(nomeProduto) {
    const response = api.get(`/produto/buscar`, { params: { nome: nomeProduto } })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function getProductByPdv(pdv) {
    const response = api.get(`/produto/${pdv}`)
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function postProduto(data) {
    const response = api.post(`/produto`, data)
    .then(async () => {
        await swal("Sucesso!", "Produto cadastrado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function updateProduto(pdv, data) {
    const response = api.patch(`/produto/${pdv}`, data)
    .then(async () => {
        await swal("Sucesso!", "Produto atualizado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function deleteProduto(pdv) {
    const response = api.delete(`/produto/${pdv}`)
    .then(async () => {
        await swal("Sucesso!", "Produto deletado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

//Cliente
export function getAllClients() {
    const response = api.get(`/cliente`)
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function postCliente(data) {
    const response = api.post(`/cliente`, data)
    .then(async () => {
        await swal("Sucesso!", "Cliente cadastrado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });
    
    return response;
}

export function updateCliente(id, data){
    const response = api.patch(`/cliente/${id}`, data)
    .then(async () => {
        await swal("Sucesso!", "Cliente atualizado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

export function deleteCliente(id) {
    const response = api.delete(`/cliente/${id}`)
    .then(async () => {
        await swal("Sucesso!", "Cliente deletado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
}

//Caixa
export function postPedido(data) {
    const response = api.post(`/pedido`, data)
    .then(async () => {
        await swal("Sucesso!", "Pedido finalizado com sucesso!", "success");
        window.location.reload();
    })
    .catch(async (err) => {
        if (err.response) {
            await swal("Erro!", err.response.data.message, "error");
        }
    });

    return response;
} 