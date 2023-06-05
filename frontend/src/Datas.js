//Criação de dados mocados para não conectar diretamente com o back
export const products = [
    {
        nome: "Açaí 750mL",
        precoCusto: 7,
        precoVenda: 11.5, 
        qtdEstoque: 10,
        codigoPDV: 3,
        statusVenda: true
    },
    {
        nome: "Açaí 300mL",
        precoCusto: 3,
        precoVenda: 4.5, 
        qtdEstoque: 20,
        codigoPDV: 1,
        statusVenda: true
    },
    {
        nome: "Água 500mL",
        precoCusto: 2,
        precoVenda: 3.5, 
        qtdEstoque: 40,
        codigoPDV: 16,
        statusVenda: true
    },
];

export const clients = [
    {
        cliente: "Cleber",
        telefone: 998987654,
        email: "asdasdk@gmail.com",
        divida: 103.20,
        statusDivida: true
    },
    {
        cliente: "Paula",
        telefone: 543432423,
        email: "gfrgfd@gmail.com",
        divida: 3.20,
        statusDivida: false
    },
    {
        cliente: "Thiago",
        telefone: 546778766,
        email: "awadsk@gmail.com",
        divida: 12.00,
        statusDivida: true
    },
];
