import React from "react";
import styled from "styled-components";

import twill from "images/twill.svg";
import { fonts } from "styles/fonts";
import { colors } from "styles/colors";
import { device } from "styles/breakpoints";

export const Title = ({ title }) => {
  return (
    <StyledTitle>
      <span />
      <div></div>
      <h2>{title}</h2>
      <div></div>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  @media ${device.mobile} {
    margin: -1em 0;
    background: ${colors.darkBlue};
  }
  & > div {
    flex: 1;
    background: url(${twill});
    transform: scale(1.4);
    &:first-of-type {
      background-position: center left;
    }
    &:last-of-type {
      background-position: center right;
    }
    @media ${device.mobile} {
      filter: grayscale(1) invert(1);
    }
  }
  & > h2 {
    font-family: ${fonts.serif};
    background: ${colors.darkBlue};
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.7rem;
    margin: 1rem 1.3rem;
    z-index: 10;
    @media ${device.phablet} {
      font-size: 1.5rem;
    }
    @media ${device.mobile} {
      margin: 0.75rem;
      font-size: 1.3rem;
    }
  }
  & > span {
    content: "";
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 30%;
    right: 30%;
    z-index: 1;
    background: ${colors.background};
    box-shadow: 0 0 300px 400px ${colors.background};
    @media ${device.laptop} {
      left: 35%;
      right: 35%;
    }
    @media ${device.tablet} {
      left: 40%;
      right: 40%;
    }
    @media ${device.phablet} {
      left: 45%;
      right: 45%;
    }
    @media ${device.mobile} {
      left: 35%;
      right: 35%;
      background: ${colors.darkBlue};
      box-shadow: 0 0 200px 285px ${colors.darkBlue};
    }
  }
`;
