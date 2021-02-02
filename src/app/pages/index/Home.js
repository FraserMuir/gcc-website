import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Layout } from "components/Layout";
import { fonts } from "styles/fonts";
import { colors } from "styles/colors";
import { NextMeetingWidget } from "app/widgets/next-meeting";
import { Image } from "components/Image";
import { device } from "styles/breakpoints";

export const Home = ({ frontmatter, preview }) => {
  const { image, welcomeWidget, linksWidget } = frontmatter || {};
  const { heading, signature, link, body } = welcomeWidget || {};

  return (
    <Layout preview={preview} image={image}>
      <StyledWelcomeCard>
        <div className="heading">
          <hr />
          <h1>{heading}</h1>
          <hr />
        </div>
        <div className="content">
          <p>{body}</p>
          <i>{signature}</i>
          <Link to={`/${link.path}`}>{link.text}</Link>
        </div>
      </StyledWelcomeCard>
      <StyledLinks>
        {linksWidget.map((widget) => (
          <Link to={`/${widget.path}`} key={widget.path}>
            <Image imageData={widget.image} />
            <div className="info">
              <div>{widget.heading}</div>
              <hr />
              <p>{widget.blurb}</p>
            </div>
          </Link>
        ))}
      </StyledLinks>
      {!preview && <NextMeetingWidget />}
    </Layout>
  );
};

const StyledLinks = styled.div`
  display: flex;
  padding: 0 1rem;

  @media ${device.mobile} {
    flex-flow: column nowrap;
  }

  & > a {
    flex: 1;
    background: ${colors.white};
    overflow: hidden;
    text-decoration: none;
    border-radius: 0.3em;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 5px 15px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    &:not(:last-child) {
      margin-right: 2em;
    }

    @media ${device.mobile} {
      margin-right: 0 !important;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    & > .gatsby-image-wrapper {
      height: 12rem;
      @media ${device.tablet} {
        height: 8rem;
      }
      @media ${device.mobile} {
        height: 6rem;
      }
    }
    & > .info {
      padding: 1.5rem 1rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      @media ${device.tablet} {
        padding: 1rem 0.5rem 0.5rem;
      }
      @media ${device.mobile} {
        padding: 0.75rem 0.35rem 0.5rem;
      }
      & > div {
        color: ${colors.darkBlue};
        font-family: ${fonts.serif};
        margin: 0;
        text-transform: uppercase;
        font-size: 1.15rem;
        font-weight: normal;
      }
      & > hr {
        border: none;
        outline: none;
        width: 50%;
        height: 1px;
        background: ${colors.lightGrey};
        margin: 0.5rem 0;
        @media ${device.mobile} {
          display: none;
        }
      }
      & > p {
        color: ${colors.grey};
        font-size: 0.85rem;
        white-space: pre-wrap;
        margin: 0.5rem 0;
        text-align: center;
      }
    }
  }
`;

const StyledWelcomeCard = styled.div`
  width: 100%;
  background: ${colors.white};
  border-radius: 0.3em;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 5px 15px 4px rgba(0, 0, 0, 0.1);
  padding: 1em 0;
  @media ${device.mobile} {
    box-shadow: none;
    border-radius: 0;
    padding: 1.5rem 1rem 1rem;
  }
  & > .heading {
    display: flex;
    align-items: center;
    width: 80%;
    @media ${device.mobile} {
      width: 100%;
    }
    margin: auto;
    & > hr {
      border: none;
      outline: none;
      width: 100%;
      height: 2px;
      flex: 1;
      background: ${colors.darkBlue};
    }
    & > h1 {
      color: ${colors.darkBlue};
      font-family: ${fonts.serif};
      text-transform: uppercase;
      font-weight: normal;
      margin: 0 1em;
      font-size: 1.9em;
    }
  }

  & > .content {
    padding: 1em 2em 0;
    margin: auto;
    text-align: center;
    @media ${device.mobile} {
      padding: 0;
    }
    p {
      margin: 0.5rem 0 0;
      white-space: pre-wrap;
      font-size: 1.25em;
      @media ${device.mobile} {
        font-size: 0.875rem;
      }
    }
    & > i {
      font-family: ${fonts.display};
      font-size: 4em;
      @media ${device.mobile} {
        font-size: 2rem;
      }
    }
    & > a {
      display: block;
      padding: 0.7em;
      background: ${colors.darkBlue};
      color: white;
      text-transform: uppercase;
      transition: all 0.15s ease-in-out;
      width: fit-content;
      text-decoration: none;
      margin: auto;
      font-size: 1.2em;
      &:hover {
        background: ${colors.highlightBlue};
      }
    }
  }
`;
