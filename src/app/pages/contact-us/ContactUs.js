import React from "react";
import styled from "styled-components";

import { Layout } from "components/Layout";
import { colors } from "styles/colors";
import { device } from "styles/breakpoints";
import { Markdown } from "components/Markdown";
import { Title } from "components/Title";

export const ContactUs = ({ frontmatter, preview }) => {
  const { image, title, body } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <Title title={title} />
      <StyledContactUsCard>
        <Markdown content={body} />
      </StyledContactUsCard>
    </Layout>
  );
};

const StyledContactUsCard = styled.div`
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

  & > .markdown {
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
  }
`;
