import styled from "styled-components";
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    //width: 100%;
    margin-top: 10px;
    /* position: fixed; */
    //top: 0;
    //z-index: 1;

    .sair {
        text-decoration: none;
        color: #444452;
        font-size: 20px;
        padding: 23px;
        transition: all 0.3s ease-out;
        position: absolute;
        right: 0px;

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
    .menu-toggle {
        cursor: pointer;
        float: right;
        color: #eee;
        background-color: #1e5c74;
        border: solid 1px #999;
        border-radius: 4px;
        height: 40px;
        width: 100px;
        position: absolute;
        right: 130px;
    }
    @media (min-width: 1200px) {
        .menu-toggle {
            display: none;
        }
    }
`;

export const ImgLogo = styled.img`
    padding-left: 16px;
    width: 13rem;
`;

export const BarraPrincipal = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
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
        padding: 23px;
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
