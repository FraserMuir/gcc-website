import React, { useLayoutEffect, useRef } from "react";
import moment from "moment";
import styled from "styled-components";

import { Image } from "components/Image";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, navigate } from "gatsby";

export const SinglePhoto = ({ caption, date, credit, photo }) => {
  const exitRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.tagName.toLowerCase() === "div") {
      navigate("/gallery");
    }
  };

  useLayoutEffect(() => {
    const handleEvent = (e) => e.keyCode === 27 && navigate("/gallery");
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
  }, []);

  return (
    <StyledContainer onClick={handleClick}>
      <div className="image-container">
        {/* eslint-disable-next-line */}
        <Link to="/gallery" className="exit-button" ref={exitRef} tabIndex={0} aria-label="Close">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
        <Image imageData={photo} imgStyle={{ objectFit: "contain" }} style={{ width: "100%", height: "100%" }} />
      </div>
      <p className="caption">{caption}</p>
      <div className="info">
        {date && <p className="date">{moment(date).format("MMMM Do YYYY")}</p>}
        {credit && <p className="credit">Photo credit: {credit}</p>}
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  box-shadow: inset 0 -80px 50px -20px black;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 1rem;
  z-index: 99999;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 120%;
    height: 120%;
    margin: -10%;
    backdrop-filter: blur(10px);
    pointer-events: none;
  }

  & > .image-container {
    width: 800rem;
    height: 100%;
    max-width: 96%;
    max-height: 80%;
    display: flex;
    margin: 2rem;
    
    & > .gatsby-image-wrapper {
      filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 1));
    }
    & > .exit-button {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 1px solid ${colors.lightGrey};
      background: ${colors.grey};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.veryLightGrey};
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
    }
  }

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.65);
  font-family: ${fonts.serif};
  text-transform: uppercase;
  text-align: center;
  color: ${colors.white};

  & > .caption {
    font-size: 1.25rem;
    margin: 0;
    z-index: 9999;
  }

  & > .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20rem;
    z-index: 9999;
  }
`;
