import React from "react";
import moment from "moment";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass } from "@fortawesome/free-regular-svg-icons";

import { Image } from "components/Image";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";

export const NextMeeting = ({ agenda, date, image, string }) => {
  return (
    <StyledWidget>
      <Image imageData={image} style={{ height: "25rem" }} />
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
        <a className="agenda" href={agenda.publicURL} target="_blank" rel="noreferrer noopener">
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

    & > .date {
      display: flex;
      border-radius: 0.3rem;
      padding: 0 1rem;
      height: 100%;
      background: ${colors.darkBlue};
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
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
      & > .time,
      & > .location {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.5rem;
        & > svg {
          color: ${colors.grey};
          font-size: 2rem;
        }
        p {
          color: ${colors.grey};
          font-size: 1.15rem;
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
