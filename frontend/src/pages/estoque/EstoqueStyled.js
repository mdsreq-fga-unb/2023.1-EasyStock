import styled from "styled-components";

export const Tabela = styled.section`
    table {
        background-color: #f4f4ed;
        margin-top: 2rem;
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

    .botao-principal {
        cursor: pointer;
        border: none;
        background-color: #6ba9b6;
        border-radius: 20px;
        color: #4f5a51;
        padding: 10px;
        margin: 10px;
        margin-left: 57rem;
        //left: auto;
    }
    /* 
    .botao-principal {
    cursor: pointer;
    background-color: #6ba9b6;
    border-radius: 20px;
    color: #4F5A51;
    padding: 10px;
    margin: 10px;
    left: 66%;
}
    
    */

    .botao-principal:hover {
        background-color: #1e5c74;
        font-weight: bolder;
        color: #6ba9b6;
        transition: all 0.1s ease-out;
    }
`;
