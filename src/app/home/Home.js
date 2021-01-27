import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

const StyledWelcomeCard = styled.div`
  width: 100%;
  background: ${colors.white};
  border-radius: 0.3em;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 5px 15px 4px rgba(0, 0, 0, 0.1);
  padding: 1em;

  & > .heading {
    display: flex;
    align-items: center;
    width: 80%;
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
      font-size: 1.75em;
    }
  }

  & > .content {
    padding: 1em 2em 0;
    margin: auto;
    text-align: center;
    & > div {
      margin: 1em 0;
      font-size: 1.25em;
      white-space: pre-wrap;
    }
    & > i {
      font-family: ${fonts.display};
      font-size: 4em;
    }
    & > a {
      display: block;
      padding: 0.7em;
      background: ${colors.darkBlue};
      color: ${colors.white};
      text-transform: uppercase;
      transition: all 0.15s ease-in-out;
      width: fit-content;
      text-decoration: none;
      margin: auto;
      font-size: 1.2em;
      &:hover {
        background: ${colors.highlightBlue};
        color: white;
      }
    }
  }
`;

export const Home = ({ body, heading, signature, link }) => {
  return (
    <StyledWelcomeCard>
      <div className="heading">
        <hr />
        <h1>{heading}</h1>
        <hr />
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <i>{signature}</i>
        <a href={link.path}>{link.text}</a>
      </div>
    </StyledWelcomeCard>
  );
};
