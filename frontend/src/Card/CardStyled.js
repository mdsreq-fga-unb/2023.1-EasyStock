import styled from "styled-components";

export const Produtos = styled.tr`
    text-align: center;
    cursor: pointer;
    td{
        background-color: #77c3d5;
        border-radius: 0px;
        padding: 1px;
    }
    :hover td {
        background-color: #1e5c74;
        font-weight: bolder;
        color: #6ba9b6;
        transition: all 0.1s ease-out;
    }
`;
export const Produto = styled.tr`
    text-align: center;
    td{
        background-color: #77c3d5;
        border-radius: 0px;
        padding: 1px;
    }
    .deletar-card{
        background-color: #D9D9D9;
        cursor: pointer;
    }
    i:hover{
        color: red;
        transition: all 0.1s ease-out;
    }
`;
export const Lista = styled.option`
background-color: red;
`
