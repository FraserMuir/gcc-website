import React, { useEffect, useRef, useState } from "react";
import showdown from "showdown";
import styled from "styled-components";

export const Markdown = ({ content, ...props }) => {
  const converterRef = useRef(new showdown.Converter());
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    setConvertedContent(converterRef.current.makeHtml(content));
  }, [content]);

  return <StyledMarkdown dangerouslySetInnerHTML={{ __html: convertedContent }} className={["markdown", props.className || ""].filter(Boolean).join("")} {...props} />;
};

const StyledMarkdown = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
`;
