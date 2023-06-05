import styled from "styled-components";

export const TodoModal = styled.section`
    .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        padding: 150px;
    }
    .card {
        background-color: #f4f4ed;
        padding: 30px;
        border-radius: 4%;
        box-shadow: 3px 3px 1px 0px #00000080;
    }
    h1 {
        text-align: center;
        margin-bottom: 5px;
        color: #6ba9b6;
    }
    .label-float input {
        text-align: center;
        background-color: #77c3d5;
        width: 50%;
        padding: 5px;
        margin: 5px;
        display: inline-block;
        border: 0;
        outline: none;
        width: 93%;
        font-size: 16px;
        transition: all 0.3s ease-out;
        border-radius: 20px;
    }

    .label-float {
        position: relative;
        padding-top: 1px;
        margin-top: 1%;
        margin-bottom: 5%;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .button-modal {
        bottom: 90px;

        border-color: #272262;
        color: #444449;
        padding: 2px;
        font-size: 16px;
        margin-top: 0;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.1s ease-out;
    }
    .button-modal:hover {
        background-color: #1e5c74;
        font-weight: bolder;
    }
    .button-modalc {
        bottom: 90px;
        left: 270px;
        border-color: #272262;
        color: #444449;
        padding: 2px;
        font-size: 16px;
        margin-top: 0;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.1s ease-out;
    }
    .button-modalc:hover {
        background-color: #1e5c74;
        font-weight: bolder;
    }
`;
