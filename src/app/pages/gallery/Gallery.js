import React, { useRef, useState } from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import moment from "moment";

import { Layout } from "components/Layout";
import { Image } from "components/Image";
import { getPublicUrl } from "helpers/getPublicUrl";
import { fonts } from "styles/fonts";
import { colors } from "styles/colors";

export const Gallery = ({ frontmatter, preview }) => {
  const { image, photos } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <StyledLayout>
        <Masonry breakpointCols={{ default: 3, 850: 2, 550: 1 }} className="grid" columnClassName="grid-column">
          {(photos || []).map((photo, i) => (
            <Photo key={i} {...photo} />
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

const Photo = ({ photo, caption, date, credit }) => {
  const captionRef = useRef(null);
  const [captionHeight, setCaptionHeight] = useState(null);

  if (!photo) return null;
  console.log(captionHeight);
  return (
    <StyledPhoto className="grid-item" captionheight={captionHeight}>
      <div className="image-container">
        <Image className="image" imageData={getPublicUrl(photo)} useRegularImgInPreview onLoad={() => setCaptionHeight(captionRef.current.clientHeight)} />
        {(caption || date || credit) && (
          <div className="info">
            {caption && (
              <p className="caption" ref={captionRef}>
                {caption}
              </p>
            )}
            <div className="bottom">
              {date && <p className="date">{moment(date).format("Do MMM YYYY")}</p>}
              {credit && <p className="credit">Photo credit: {credit}</p>}
            </div>
          </div>
        )}
      </div>
    </StyledPhoto>
  );
};

const StyledPhoto = styled.div`
  text-decoration: none;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  margin-bottom: 1.5rem;
  cursor: default;
  &:hover {
    & .info {
      transform: translateY(0%) !important;
    }
  }

  & > .image-container {
    box-shadow: 0 7px 10px 2px rgba(0, 0, 0, 0.125), 0 18px 25px 5px rgba(0, 0, 0, 0.225);
    border-radius: 0.4em;
    overflow: hidden;
    display: flex;
    position: relative;
    & > .image {
      width: 100%;
      height: auto;
    }
    & > .info {
      position: absolute;
      transform: ${(props) => `translateY(calc(100% - ${props.captionheight || 0}px)) translateZ(0)`};
      -webkit-font-smoothing: antialised;
      will-change: transform, opacity;
      bottom: 0;
      left: 0;
      right: 0;
      font-family: ${fonts.serif};
      text-transform: uppercase;
      text-align: center;
      color: ${colors.white};
      backdrop-filter: blur(15px);
      background: rgba(0, 0, 0, 0.3);
      margin: 0;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
      transition: all 0.2s;

      & > .caption {
        padding: 0.625rem;
        font-size: 0.9rem;
        margin: 0;
      }

      & > .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > .credit, & > .date {
          font-family: ${fonts.sansSerif};
          font-size: 0.6rem;
          text-align: left;
          margin: 0.2rem;
        }
      }
    }
  }
`;
