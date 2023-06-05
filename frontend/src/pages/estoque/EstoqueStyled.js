import styled from "styled-components";

export const PesquisaProduto = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: #77c3d5;
    border-radius: 0.8rem;

    i.bi-search {
        margin-left: 1px;
        padding: 0.6rem;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.4rem;
        background-color: #77c3d5;
        border: none;
        width: 78%;
    }
`;

export const Tabela = styled.section`
    table {
        background-color: #f4f4ed;
        margin-top: 2rem;
        margin-left: 1rem;
        border-radius: 10px;
        width: 78%;
    }

    tr {
        font-size: 20px;
    }
    th {
        background-color: #6ba9b6;
        color: #44443e;
        width: 10%;
    }

    button {
        border: none;
        background-color: #6ba9b6;
        border-radius: 20px;
        font-size: 20px;
        color: #4F5A51;
        position: fixed;
        padding: 10px;
        margin: 10%;
        left: 54%;
    }
    button:hover {
        background-color: #1e5c74;
        font-weight: bolder;
        color: #77C3D5;
    }
`;
