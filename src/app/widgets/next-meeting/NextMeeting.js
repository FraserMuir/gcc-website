import React from "react";
import moment from "moment";
import styled from "styled-components";

import { Image } from "components/Image";
import { colors } from "styles/colors";

const StyledWidget = styled.div`
  width: 100%;
  background: ${colors.white};
  border-radius: 0.3em;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 5px 15px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  
  & > .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.white};
    backdrop-filter: blur(5px);
    height: 8em;
    display: flex;
    align-items: center;

    & > .date {
    }
  }
`;

export const NextMeeting = ({ agenda, date, image, string }) => {
  return (
    <StyledWidget>
      <Image imageData={image} style={{ height: "30em" }} />
      <div className="info">
        <div className="date">
          <h3>{moment(date).format("MMMM")}</h3>
          <p>{moment(date).format("Do")}</p>
        </div>
        <div className="time">{moment(date).format("HH:mma")}</div>
        <div className="location">{string}</div>
        <a className="agenda" href={agenda} target="_blank" rel="noref noopener" />
      </div>
    </StyledWidget>
  );
};
