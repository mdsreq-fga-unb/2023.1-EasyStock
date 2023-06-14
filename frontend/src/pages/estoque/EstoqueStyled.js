import styled from "styled-components";

export const Tabela = styled.section`
    table {
        //background-color: #f4f4ed;
        margin-top: 2rem;
        margin-left: 2rem;
        border-radius: 30px;
        width: 90%;
    }

    tr {
        font-size: 20px;
    }
    th {
        background-color: #6ba9b6;
        color: #44443e;
        width: 10%;
        border-radius: 10px;
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
    
    .botao-principal {
    cursor: pointer;
    border: none;
    background-color: #6ba9b6;
    border-radius: 20px;
    color: #4F5A51;
    padding: 10px;
    margin: 10px;
    position: relative;
    left: 80%;
    
}
    
   

    .botao-principal:hover {
        background-color: #1e5c74;
        font-weight: bolder;
        color: #6ba9b6;
        transition: all 0.1s ease-out;
    }
`;
