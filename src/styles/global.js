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
    font-family: ${fonts.sansSerif};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    color: rgba(0,0,0,0.8);
    background: ${colors.background};
  }
  
  * {
    box-sizing: border-box;
  }

  main {
    width: 80em;
    max-width: 96%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 3em 0;
    margin: 3em auto;
  }

  .gatsby-image-wrapper.blur:before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    pointer-events: none;
  }
`;
