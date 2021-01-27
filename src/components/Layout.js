import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";

import { Footer } from "./Footer";
import { Image } from "./Image";
import { Navbar } from "./Navbar";
import { SEO } from "./SEO";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  main {
    width: 80em;
    max-width: 96%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: 3em 0;
    margin: 3em auto;
  }
`;

export const Layout = ({ preview, children, image }) => {
  return (
    <StyledLayout>
      {!preview && <SEO />}
      <GlobalStyle />
      <Navbar />
      <div>
        {image && <Image heading imageData={image} />}
        <main id="main">{children}</main>
      </div>
      <Footer />
    </StyledLayout>
  );
};
