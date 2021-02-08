import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import moment from "moment";
import { parse } from "query-string";
import { Link } from "gatsby";

import { useScrollRestoration } from "helpers/useScrollRestoration";
import { getPublicUrl } from "helpers/getPublicUrl";
import { fonts } from "styles/fonts";
import { colors } from "styles/colors";
import { device } from "styles/breakpoints";

import { Layout } from "components/Layout";
import { Image } from "components/Image";

import { SinglePhoto } from "./SinglePhoto";

export const Gallery = ({ frontmatter, preview }) => {
  useScrollRestoration("gallery-scroll");

  const params = parse(window?.location?.search);

  const { image, photos } = frontmatter || {};

  const photo = photos.find((p) => p.photo?.name?.toLowerCase() === params?.photo?.toLowerCase());

  return (
    <Layout preview={preview} image={image}>
      {photo?.photo?.name && <SinglePhoto {...photo} scrollY={window.scrollY} />}
      <StyledLayout>
        <Masonry breakpointCols={{ default: 3, 850: 2, 550: 1 }} className="grid" columnClassName="grid-column">
          {(photos || []).map((photo, i) => (
            <Photo key={i} {...photo} state={{ frontmatter, preview }} />
          ))}
        </Masonry>
      </StyledLayout>
    </Layout>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  & > .grid {
    display: flex;
    margin-left: -1.5rem;
    width: auto;
    & > .grid-column {
      padding-left: 1.5rem;
      background-clip: padding-box;
    }
  }
`;

const Photo = ({ photo, caption, date, credit, position, state }) => {
  if (!photo) return null;

  const getFontSize = (caption) => {
    const smallText = 15; // Cutoff for small amount of text is 15 chars
    const smallSize = 1.7; // Size of small amount of text (in ch)
    const largeText = 75; // Cutoff for large amount of text is 75 chars
    const largeSize = 1; // Size of large amount of text (in ch)

    const text = caption.length;

    if (text <= smallText) return smallSize;
    if (text >= largeText) return largeSize;

    const diffText = text - smallText; // How many characters over the small limit
    const diffPerc = diffText / (largeText - smallSize); // What fraction are you between the limits (between 0.0 and 1.0)
    const diffSize = diffPerc * (smallSize - largeSize); // What size increase corresponds to this fraction between the limits

    return smallSize - diffSize; // Add the increase to the small size
  };

  return (
    <StyledPhoto className="grid-item">
      <Link className="image-container" to={`/gallery?photo=${photo?.name}`} state={state}>
        <Image className="image" imageData={getPublicUrl(photo)} useRegularImgInPreview />
        {(caption || date || credit) && (
          <div className="info" style={position === "top" ? { top: 0, flexDirection: "column-reverse" } : { bottom: 0 }}>
            {caption && (
              <p className="caption" style={{ fontSize: `${getFontSize(caption)}ch` }}>
                {caption}
              </p>
            )}
            <div className="bottom">
              {date && <p className="date">{moment(date).format("Do MMM YYYY")}</p>}
              {credit && <p className="credit">Photo credit: {credit}</p>}
            </div>
          </div>
        )}
      </Link>
    </StyledPhoto>
  );
};

const StyledPhoto = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  margin-bottom: 1.5rem;
  cursor: default;

  & > .image-container {
    text-decoration: none;
    box-shadow: 0 7px 10px 2px rgba(0, 0, 0, 0.125), 0 18px 25px 5px rgba(0, 0, 0, 0.225);
    border-radius: 0.4em;
    overflow: hidden;
    display: flex;
    position: relative;
    @media ${device.mobile} {
      border-radius: 0;
    }

    & > .image {
      width: 100%;
      height: auto;
    }
    & > .info {
      position: absolute;
      left: 0;
      right: 0;
      font-family: ${fonts.serif};
      text-transform: uppercase;
      text-align: center;
      color: ${colors.white};
      background: rgba(0, 0, 0, 0.45);
      margin: 0;
      padding: 0.3rem 0.5rem;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
      display: flex;
      flex-direction: column;
      margin: -0.3rem 0;

      & > .caption {
        margin: 0;
      }

      & > .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.2rem 0;
        & > .credit,
        & > .date {
          font-family: ${fonts.sansSerif};
          font-size: 0.62rem;
          text-align: left;
          margin: 0;
        }
      }
    }
  }
`;
