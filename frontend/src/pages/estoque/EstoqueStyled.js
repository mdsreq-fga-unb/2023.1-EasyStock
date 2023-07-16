import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 30px;
    /* justify-content: flex-end; */
    /* align-items: end; */
`;

export const Botao = styled.div`
    display: flex;
    justify-content: flex-end;
    .botao-principal {
        cursor: pointer;
        border: none;
        background-color: #6ba9b6;
        border-radius: 20px;
        color: #4f5a51;
        padding: 10px;
        margin-top: 10px;

        /* width: 90%; */
    }

    .botao-principal:hover {
        background-color: #1e5c74;
        font-weight: bolder;
        color: #6ba9b6;
        transition: all 0.1s ease-out;
    }
`;

export const Tabela = styled.section`


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

    /* .botao-principal {
        cursor: pointer;
        border: none;
        background-color: #6ba9b6;
        border-radius: 20px;
        color: #4f5a51;
        padding: 10px;
        margin: 10px;
        margin-left: 57rem;
        //left: auto;
    } */
`;
