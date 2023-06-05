import styled from "styled-components";

export const Body = styled.body`
    display: flex;
    align-items: flex-end;

    div {
    }

    img {
        width: 23rem;
        position: fixed;
        z-index: 30;
        right: 10px;
        position: fixed;
        right: 220px;
        bottom: 30px;
    }
    h1 {
        font-size: 60px;
        padding: 20px;
        margin: 20px;
        color: #332626;
    }
    p {
        padding: 20px;
        margin: 20px;
        width: 60%;
        height: auto;
    }
`;

export const CirculoBranco = styled.div`
    position: fixed;
    clip-path: circle(50%);
    background: #ffffff;
    width: 500px;
    height: 500px;
    right: 180px;
    bottom: 30px;
`;

export const CirculoAzul = styled.div`
    position: fixed;
    clip-path: circle(50%);
    background: #6ba9b6;
    width: 200px;
    height: 200px;
    margin-top: 20px;
    z-index: 20;
    right: 180px;
    bottom: -30px;
`;
