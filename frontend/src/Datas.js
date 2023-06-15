//Criação de dados mocados para não conectar diretamente com o back
export const products = [
    {
        nome: "Açaí 750mL",
        precoCusto: 7,
        precoVenda: 11.5, 
        qtdEstoque: 10,
        qtdMinEstoque: 20,
        medida: "ML",
        codigoPDV: 3,
        statusVenda: true
    },
    {
        nome: "Açaí 300mL",
        precoCusto: 3,
        precoVenda: 4.5, 
        qtdEstoque: 20,
        qtdMinEstoque: 2,
        medida: "L",
        codigoPDV: 1,
        statusVenda: true
    },
    {
        nome: "Água 500mL",
        precoCusto: 2,
        precoVenda: 3.5, 
        qtdEstoque: 40,
        qtdMinEstoque: 4,
        medida: "Mg",
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

export const caixas = [
    {
        itemP: 3,
        qtdEstoqueP: 10,
        nomeP: "Açaí 750mL",
        precoUniP: 7,
        precoVendaP: 10,
        
    },
    {
        itemP: 6,
        qtdEstoqueP: 10,
        nomeP: "caju 750mL",
        precoUniP: 7,
        precoVendaP: 11.5,
    },
    {
        itemP: 3,
        qtdEstoqueP: 10,
        nomeP: "pera 750mL",
        precoUniP: 7,
        precoVendaP: 11.5,
    },
];