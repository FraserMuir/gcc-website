import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SEO } from "./SEO";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <SEO />
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};
