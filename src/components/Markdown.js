import React, { useEffect, useRef, useState } from "react";
import showdown from "showdown";

export const Markdown = ({ content, ...props }) => {
  const converterRef = useRef(new showdown.Converter());
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    setConvertedContent(converterRef.current.makeHtml(content));
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: convertedContent }} {...props} />;
};
