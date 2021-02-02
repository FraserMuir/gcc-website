import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { colors } from "styles/colors";

import facebookIcon from "images/facebook.svg";
import twitterIcon from "images/twitter.svg";
import instagramIcon from "images/instagram.svg";

const StyledFooter = styled.footer`
  background: ${colors.veryDarkGrey};
  width: 100%;

  & > .container {
    width: 80rem;
    max-width: 96%;
    margin: auto;
    padding: 3rem 1rem;

    & > .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > .buttons {
        display: flex;
        & > a {
          margin-right: 1rem;
          border: 2px solid ${colors.grey};
          text-decoration: none;
          color: ${colors.white};
          padding: 0.65rem 0.5rem;
          background: ${colors.darkGrey};
          font-size: 0.7rem;
          text-transform: uppercase;
          transition: border 0.2s;
          &:hover {
            border: 2px solid ${colors.veryLightGrey};
          }
        }
      }
      & > .socials {
        display: flex;
        img {
          margin-left: 1rem;
          height: 2rem;
          width: 2rem;
          filter: invert(1) brightness(0.6);
          transition: all 0.15s;
          &:hover {
            filter: invert(1) brightness(0.9);
          }
        }
      }
    }

    & > p {
      color: ${colors.white};
      font-size: 0.8rem;
      text-align: center;
      margin: 1.5rem 0;
      & > a {
        color: ${colors.veryLightGrey};
        margin: 0 0.25rem;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="actions">
          <div className="buttons">
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/about-us">About Us</Link>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/Garelochhead-Community-Council-1833115896902836/" target="_blank" rel="noreferrer noopener">
              <img src={facebookIcon} alt="facebook icon" width="2rem" height="2rem" />
            </a>
            <a href="https://twitter.com/GarelochheadCC?lang=en-gb" target="_blank" rel="noreferrer noopener">
              <img src={twitterIcon} alt="twitter icon" width="2rem" height="2rem" />
            </a>
            <a href="https://www.instagram.com/garelochheadcommunity/?hl=en" target="_blank" rel="noreferrer noopener">
              <img src={instagramIcon} alt="instagram icon" width="2rem" height="2rem" />
            </a>
          </div>
        </div>
        <p>
          Garelochhead and surrounding area backdrops courtesy of
          <a href="http://www.timberrall.com/" target="_blank" rel="noreferrer noopener">
            Tim Berrall
          </a>
          and
          <a href="http://www.robertbellstudio.co.uk/" target="_blank" rel="noreferrer noopener">
            Robert Bell
          </a>
          unless stated otherwise
        </p>
      </div>
    </StyledFooter>
  );
};
