import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  body { 
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-family: ${fonts.serif};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: rgba(0,0,0,0.8);
    background: ${colors.background};
  }
  * {
    box-sizing: border-box;
  }
`;
