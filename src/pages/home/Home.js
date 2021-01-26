import React from "react";

import { Image } from "../../components/Image";

export const Home = ({ main }) => {
  return (
    <>
      <h1>{main.heading}</h1>
      <p>{main.content}</p>
      <i>{main.signature}</i>
      <Image heading imageData={main.image} />
      <a href={main.link?.path}>{main.link?.text}</a>
    </>
  );
};
