import styled from "styled-components";

export const DivTabela = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 30px;
    /* justify-content: flex-end; */
    /* align-items: end; */
`;

export const PesquisaCaixa = styled.div`
    width: 80%;
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: #f4f4ed;
    border-radius: 20px;

    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    i.bi-search {
        margin-left: 1px;
        padding: 0.6rem;
    }

    form div {
        margin-left: 1px;
        padding: 0.6rem;
    }

    form div input,
    p {
        font-size: 15px;
        padding: 1rem;
        background-color: #77c3d5;
        border: none;
        border-radius: 20px;
    }
`;

export const TabelasContainer = styled.section`
    display: flex;
    justify-content: space-around;
`;

export const Tabela1 = styled.div`
width: 800px;
    tr {
        font-size: 20px;
    }

    th {
        background-color: #6ba9b6;
        color: #44443e;
        width: 10%;
    }

    .botao-principal {
        cursor: pointer;
        border: none;
        background-color: #6ba9b6;
        border-radius: 20px;
        color: #4f5a51;
        padding: 10px;
        margin: 10px;
        position: relative;
        left: 85%;
    }

    .botao-principal:hover {
        background-color: #1e5c74;
        font-weight: bolder;
        color: #6ba9b6;
        transition: all 0.1s ease-out;
    }
    .primeiroTH {
        border-radius: 10px 0px 0px 0px;
    }
    .ultimoTH {
        border-radius: 0px 10px 0px 0px;
    }
    
`;

export const Tabela2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 2rem;
    border-radius: 10px;
    width: 35%;
    max-height: 340px;
    overflow-y: auto;
    margin-right: 20px;
    background-color: white;

    tr {
        font-size: 20px;
    }

    th {
        background-color: #6ba9b6;
        color: #44443e;
        width: 10%;
    }
    .primeiroTH {
        border-radius: 10px 0px 0px 0px;
    }
    .ultimoTH {
        border-radius: 0px 10px 0px 0px;
    }
`;
