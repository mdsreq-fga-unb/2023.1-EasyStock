import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    /* position: fixed; */
    top: 0;
    z-index: 1;
`;

export const ImgLogo = styled.img`
    /* Caso for preciso editar as proporções da imagem */
    width: 13rem;
    /* object-fit: cover; */
`;

export const BarraPrincipal = styled.div`
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        display: inline-block;
    }
    a {
        text-decoration: none;
        color: #444452;
        font-size: 20px;
        padding: 40px;
        transition: all 0.3s ease-out;
        text-transform: uppercase;
        :hover {
            color: black;
        }
        /* :focus,
        :valid {
            font-size: 23px;
            margin-top: 0;
            color: black;
        } */
    }
`;
