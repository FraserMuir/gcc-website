import React from "react";
import styled from "styled-components";

import { Layout } from "components/Layout";
import { colors } from "styles/colors";
import { device } from "styles/breakpoints";
import { Markdown } from "components/Markdown";
import { Title } from "components/Title";
import { fonts } from "styles/fonts";

export const Events = ({ frontmatter, preview }) => {
  const { image, title, items } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <Title title={title} />
      {items.map((item, i) => {
        const { heading, body } = item || {};
        return (
          <StyledEventsCard key={i}>
            <div className="heading">
              <hr />
              <h1>{heading}</h1>
              <hr />
            </div>
            <Markdown content={body} />
          </StyledEventsCard>
        );
      })}
    </Layout>
  );
};

const StyledEventsCard = styled.div`
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

  & > .markdown {
    padding: 1em 2em 0;
    margin: auto;
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
  }
`;
