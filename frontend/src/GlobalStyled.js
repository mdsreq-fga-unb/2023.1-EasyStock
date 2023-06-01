import { createGlobalStyle } from "styled-components";

import PoppinsWoff from '../public/fonts/Poppins.woff';
import PoppinsWoff2 from '../public/fonts/Poppins.woff2';

export const GlobalStyled = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsWoff2}) format('woff2'),
        url(${PoppinsWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}

htmL {
  width: auto;
}

body {
  /* max-width: 100vw;
  height: 100vh; */
  background-color: #d9d9d9;
}
`;
