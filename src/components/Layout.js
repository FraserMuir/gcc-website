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
    margin: 0 auto;
    margin-top: calc(-90px);
    padding-top: calc(90px);
    & > * {
      margin-top: 3em;
    }
    & > :last-child {
      margin-bottom: 3em;
    }
    @media ${device.mobile} {
      max-width: 100%;
      & > * {
        margin-top: 2em;
      }
      & > :first-child {
        margin-top: 0;
      }
      & > :last-child {
        margin-bottom: 0;
      }
      & > :first-child :last-child {
        margin: 2em 0;
      }
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
