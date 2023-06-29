import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px; 
    width: 250px; 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius:  0px;
    .bi-x-circle {
        color: red;
    }
    button{
        border: none;
        background-color: #D1D2D3;
        border-radius: 30px;
        cursor: pointer;
    }
`;
