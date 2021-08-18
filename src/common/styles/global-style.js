import { createGlobalStyle } from "styled-components";
import CovidImg from "../../assets/images/covid.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    height: 100%;
    display: flex;
  }

  #root {
    width: 100%;
    height: 100%;
    background: url(${CovidImg});
    background-size: cover;
    background-position: center center;
  }
`;
