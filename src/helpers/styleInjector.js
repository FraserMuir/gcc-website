import React, { useState, useEffect } from "react";
import { StyleSheetManager } from "styled-components";
import { Layout } from "../components/Layout";

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHeadElem = iframe.contentDocument.head;

    const fontsLink = document.createElement("link");
    fontsLink.rel = "stylesheet"
    iframeHeadElem.appendChild(fontsLink);
    fontsLink.href = "https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Open+Sans&family=Sacramento&display=swap"
    
    setIframeRef(iframeHeadElem);
  }, []);

  return iframeRef && <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>;
}

export const withStyledComponentsRendered = (Comp) => {
  return (props) => (
    <StyleInjector>
      <Layout preview>
        <Comp {...props} />
      </Layout>
    </StyleInjector>
  );
};
