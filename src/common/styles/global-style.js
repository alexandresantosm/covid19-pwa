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

  .mb-2 {
    margin-bottom: 1rem;
  }

  .pt-2 {
    padding-top: 1rem;
  }

  .cursor {
    cursor: pointer;
  }
`;
