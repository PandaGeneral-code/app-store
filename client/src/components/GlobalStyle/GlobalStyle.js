import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  html,
  body,
  #root {
    background: black;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default GlobalStyle;
