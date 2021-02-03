import React from "react";
import moment from "moment";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass } from "@fortawesome/free-regular-svg-icons";

import { Image } from "components/Image";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { device } from "styles/breakpoints";

export const NextMeeting = ({ frontmatter }) => {
  const { agenda, date, image, string } = frontmatter || {};

  return (
    <StyledWidget>
      <Image imageData={image} />
      <h3>Next Meeting</h3>
      <div className="footer">
        <div className="date">
          <h3>{moment(date).format("MMMM")}</h3>
          <p>{moment(date).format("Do")}</p>
        </div>
        <div className="info">
          <div className="time">
            <FontAwesomeIcon icon={faClock} />
            <p>{moment(date).format("HH:mma")}</p>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faCompass} />
            <p>{string}</p>
          </div>
        </div>
        <a className="agenda" href={agenda.publicURL || `${window.location.origin}/media/${agenda.path.split("/").slice(-1)[0]}`} target="_blank" rel="noreferrer noopener">
          Agenda
        </a>
      </div>
    </StyledWidget>
  );
};

const StyledWidget = styled.div`
  width: 100%;
  background: ${colors.white};
  border-radius: 0.3rem;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 5px 15px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  will-change: opacity;

  @media ${device.mobile} {
    box-shadow: none;
    border-radius: 0;
    margin-bottom: -1.5rem;
  }

  & > .gatsby-image-wrapper {
    height: 25rem;
    @media ${device.tablet} {
      height: 18rem;
    }
    @media ${device.mobile} {
      height: 14rem;
    }
  }

  & > h3 {
    position: absolute;
    width: 100%;
    text-align: center;
    height: 5rem;
    left: 0;
    right: 0;
    margin: 0;
    top: calc(50% - 4rem);
    font-size: 6rem;
    @media ${device.tablet} {
      top: calc(50% - 4.25rem);
      font-size: 5rem;
    }
    @media ${device.mobile} {
      top: calc(50% - 4.5rem);
      font-size: 4rem;
    }
    color: white;
    font-weight: normal;
    font-family: ${fonts.display};
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(-1px -1px 0px ${colors.lightGrey}) drop-shadow(3px 3px 0px ${colors.darkBlue});
  }

  & > .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.white};
    backdrop-filter: blur(5px);
    height: 6rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    @media ${device.tablet} {
      padding: 0.5rem;
      height: 5rem;
    }

    & > .date {
      display: flex;
      border-radius: 0.3rem;
      padding: 0 1rem;
      height: 100%;
      background: ${colors.darkBlue};
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      @media ${device.tablet} {
        padding: 0 0.7rem;
      }
      h3 {
        margin: 0;
        color: white;
        text-transform: capitalize;
        font-size: 0.8rem;
        font-weight: normal;
      }
      p {
        margin: 0;
        color: white;
        font-size: 1.25rem;
      }
    }

    & > .info {
      flex: 1;
      display: flex;
      align-items: center;
      @media ${device.mobile} {
        flex-flow: column nowrap;
        align-items: flex-start;
      }
      & > .time,
      & > .location {
        display: flex;
        align-items: center;
        padding: 0 1.5rem;
        @media ${device.tablet} {
          padding: 0 0.25rem 0 1rem;
        }
        @media ${device.tablet} {
          padding: 0 0.25rem 0 0.5rem;
        }
        & > svg {
          color: ${colors.grey};
          font-size: 2rem;
          margin-right: 0.75rem;
          width: 1em;
          height: 1em;
          @media ${device.tablet} {
          margin-right: 0.35rem;
            font-size: 1.65rem;
          }
        }
        p {
          white-space: nowrap;
          margin: 0.35rem 0;
          color: ${colors.grey};
          font-size: 1.15rem;
          @media ${device.tablet} {
            font-size: 1rem;
          }
          @media ${device.mobile} {
            font-size: 0.8rem;
          }
        }
      }
    }

    & > .agenda {
      color: ${colors.darkBlue};
      font-size: 1rem;
      padding: 0.75rem 1rem;
      background: ${colors.white};
      border-radius: 0.3rem;
      text-decoration: none;
      font-family: ${fonts.serif};
      text-transform: uppercase;
    }
  }
`;
