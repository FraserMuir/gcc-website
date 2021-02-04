import React from "react";
import { Layout } from "components/Layout";
import styled from "styled-components";
import { Image } from "components/Image";

export const Gallery = ({ frontmatter, preview }) => {
  const { image, photos } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <StyledGallery>
        {(photos || []).map((photo, i) => (
          <Photo key={i} {...photo} />
        ))}
      </StyledGallery>
    </Layout>
  );
};

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Photo = ({ photo, caption, date, credit }) => {
  if (!photo) return null;
  return (
    <StyledPhoto>
      <Image imageData={photo} />
      {caption && <p>{caption}</p>}
      {date && <p className="date">{date}</p>}
      {credit && <p className="credit">{credit}</p>}
    </StyledPhoto>
  );
};

const StyledPhoto = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
