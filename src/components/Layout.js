import React from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { GlobalStyle } from "styles/global";

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
    margin: 0 auto;
    @media ${device.mobile} {
      max-width: 100%;
      margin: 0 auto;
      gap: 1.5em 0;
    }
    margin-top: calc(-90px);
    padding-top: calc(90px);
    & > :first-child {
      margin-top: 3em;
    }
    & > :last-child {
      margin-bottom: 3em;
    }
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
