import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import logo from "../images/logo.svg";
import { device } from "../styles/breakpoints";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

export const Navbar = () => {
  return (
    <StyledNavbar role="navigation" aria-label="main-navigation">
      <StyledSkipLink href="#main">Skip to content</StyledSkipLink>
      <StyledLogo className="logo-container" to="/">
        <img className="logo" src={logo} alt="GCC logo" width="4.5rem" height="4.5rem" />
        <div className="logo-text">
          <h2>Garelochhead</h2>
          <h3>Community Council</h3>
        </div>
      </StyledLogo>
      <StyledMenuButton id="menu-button" htmlFor="menu-toggle" tabIndex={0}>
        <span />
        <span />
        <span />
      </StyledMenuButton>
      <StyledToggle id="menu-toggle" type="checkbox" />
      <StyledMenu id="menu">
        <div className="menu-item">
          <div className="sub-heading" tabIndex={0} role="button">
            Meetings
          </div>
          <StyledSubMenu className="sub-menu">
            <Link to="/next-meeting">Next Meeting</Link>
            <Link to="/historical-meetings">Historical Meetings</Link>
          </StyledSubMenu>
        </div>
        <div className="menu-item">
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="menu-item">
          <div className="sub-heading" tabIndex={0} role="button">
            Local Info
          </div>
          <StyledSubMenu className="sub-menu">
            <Link to="/links">Links</Link>
            <Link to="/events">Events</Link>
          </StyledSubMenu>
        </div>
        <div className="menu-item">
          <Link to="/news">News</Link>
        </div>
      </StyledMenu>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5em 1.75em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.3s ease-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledSkipLink = styled.a`
  z-index: 9999;
  background: ${colors.darkBlue};
  color: ${colors.white};
  font-size: 1.3em;
  padding: 1em;
  position: absolute;
  transform: translateY(calc(-100% - 1.5em));
  transition: transform 0.15s ease-in-out;
  &:focus {
    transform: translateY(0%);
  }
`;

const StyledMenuButton = styled.label`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 3.25em;
  height: 2.25em;
  padding: 0.5em;
  z-index: 999;
  @media ${device.mobile} {
    display: flex;
  }

  & > span {
    width: 100%;
    height: 2px;
    backdrop-filter: invert(1) hue-rotate(65deg);
    position: relative;
  }
`;

const StyledLogo = styled(Link)`
  display: flex;
  text-decoration: none;
  z-index: 999;
  & > .logo {
    width: 4.5em;
    height: auto;
  }
  & > .logo-text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 0.5em;
    @media ${device.tablet} {
      display: none;
    }

    h2 {
      font-family: ${fonts.serif};
      font-weight: normal;
      font-size: 1.3em;
      color: ${colors.darkBlue};
      letter-spacing: 2px;
      text-transform: uppercase;
      margin: 0;
    }
    h3 {
      font-family: ${fonts.sansSerif};
      font-weight: normal;
      font-size: 1em;
      color: ${colors.grey};
      letter-spacing: 1.2px;
      text-transform: uppercase;
      margin: 0;
    }
  }
`;

const StyledSubMenu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 2.2em 0 0.2em;
  background: rgba(255, 255, 255, 0.8);
  visibility: hidden;
  opacity: 0;
  z-index: 99;
  display: flex;
  flex-flow: column nowrap;
  transition: opacity 0.3s ease-out;

  & > a {
    position: relative;
    margin: 0.2em -0.3em 0.3em 1.2em;
    width: calc(100% - 1.7em);
    padding: 0.5em;
    font-family: ${fonts.serif};
    text-decoration: none;
    color: ${colors.darkBlue};
    transition: color 0.3s;
    font-size: 1.15em;

    &:before {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      left: -0.8em;
      background: ${colors.darkBlue};
      transform: scaleX(0.025);
      transform-origin: left;
      transition: transform 0.3s;
    }

    &:hover {
      color: ${colors.white};
      &:before {
        transform: scaleX(1);
      }
    }
  }
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  & > .menu-item {
    flex: 1;
    max-width: 13.5rem;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-out;
    position: relative;
    & > a,
    & > .sub-heading {
      cursor: pointer;
      text-decoration: none;
      color: ${colors.darkBlue};
      font-family: ${fonts.serif};
      font-size: 1.4em;
      font-weight: normal;
      text-transform: uppercase;
      margin: 0;
      text-align: center;
      white-space: nowrap;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 20%;
      left: 0;
      background: ${colors.darkBlue};
      visibility: hidden;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
    }

    &:hover,
    &:focus-within {
      background: rgba(255, 255, 255, 0.8);

      &:before {
        visibility: visible;
        transform: scaleX(0.8);
      }

      & > .sub-menu {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

const StyledToggle = styled.input`
  display: none;

  @media ${device.mobile} {
    & + #menu {
      display: none;
    }

    &:checked + #menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-flow: column nowrap;
      background: ${colors.accentBackground};
      display: flex;
      align-items: center;
      justify-content: center;
      & > .menu-item {
        justify-content: flex-start;
        flex: 0;
        width: 100%;
        background: none;
        &:before {
          display: none;
        }

        & > .sub-heading,
        & > a {
          color: ${colors.white} !important;
        }

        & > .sub-heading:after {
          content: "";
          position: absolute;
          right: 6px;
          top: calc(50% - 6px);
          border: solid ${colors.white};
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 2px;
          transform: rotate(45deg);
          transition: transform 0.15s ease-out;
        }

        &:hover,
        &:focus-within,
        &:active {
          & > .sub-heading {
            z-index: 999;
            &:after {
              transform: rotate(-45deg) scaleY(-1);
            }
          }
          & > .sub-menu {
            box-shadow: 0 0 0 100vw ${colors.accentBackground};
            background: ${colors.accentBackground};
            padding: 0 0 0.2em;
            & > a {
              color: ${colors.white};
              margin: 0.5em;
              margin-left: 1.75em;
              padding: 0.25em 0;
              font-size: 1.3em;
              &:before {
                background: ${colors.white};
              }
            }
          }
        }
      }
    }
  }
`;
