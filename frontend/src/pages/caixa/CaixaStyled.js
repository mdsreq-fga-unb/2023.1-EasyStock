import styled from "styled-components";

export const PesquisaCaixa = styled.div`
    width: 80%;
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: #f4f4ed;
    border-radius: 20px;

    form {
        width: 80%;
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
    form div input, p{
        font-size: 1rem;
        padding: 0.4rem;
        background-color: #77c3d5;
        border: none;
        border-radius: 20px;

    }

`;
