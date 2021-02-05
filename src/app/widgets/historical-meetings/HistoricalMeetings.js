import React, { useLayoutEffect, useRef, useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";

export const HistoricalMeetings = ({ frontmatter }) => {
  let { meetings } = frontmatter || {};

  meetings = meetings.sort((a, b) => moment(b.date).unix() - moment(a.date).unix());

  let yearMap = {};

  for (const meeting of meetings) {
    const year = moment(meeting.date).format("YYYY");
    if (yearMap[year]) {
      yearMap[year] = [...yearMap[year], meeting];
    } else {
      yearMap[year] = [meeting];
    }
  }

  return (
    <StyledContainer>
      {Object.entries(yearMap)
        .sort(([yearA], [yearB]) => yearB - yearA)
        .map(([year, items], i) => (
          <Year key={year} year={year} items={items} index={i} />
        ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  background: ${colors.white};
  border-radius: 0.3em;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 5px 15px 4px rgba(0, 0, 0, 0.1);
`;

const Year = ({ year, items, index }) => {
  const [isExpanded, setIsExanded] = useState(index === 0);
  const [maxHeight, setMaxHeight] = useState(null);

  const headingRef = useRef(null);
  const itemsRef = useRef(null);

  useLayoutEffect(() => {
    const headingHeight = headingRef.current.clientHeight;
    const itemsHeight = itemsRef.current.clientHeight;

    if (isExpanded) {
      setMaxHeight(headingHeight + itemsHeight);
    } else {
      setMaxHeight(headingHeight);
    }
  }, [isExpanded]);

  useLayoutEffect(() => {
    const headerEl = headingRef.current;

    const event = () => setIsExanded((exp) => !exp);
    const keyWrappedEvent = (e) => e.keyCode === 13 && event(e);

    headerEl.addEventListener("mousedown", event);
    headerEl.addEventListener("keydown", keyWrappedEvent);

    return () => {
      headerEl.removeEventListener("mousedown", event);
      headerEl.removeEventListener("keydown", keyWrappedEvent);
    };
  }, []);

  return (
    <StyledYear key={year} maxheight={maxHeight} expanded={isExpanded}>
      <div className="heading" ref={headingRef}>
        <p>{year}</p>
        <span tabIndex={0} role="button" className={isExpanded ? "flip" : ""}>
          <div />
        </span>
      </div>
      <div className="items" ref={itemsRef}>
        {items.map((meeting) => (
          <a key={meeting.date} href={meeting.file?.publicURL} tabIndex={isExpanded ? 0 : -1} target="_blank" rel="noreferrer noopener">
            {moment(meeting.date).format("MMMM Do")}
          </a>
        ))}
      </div>
    </StyledYear>
  );
};

const StyledYear = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => props.maxheight}px;
  will-change: height, max-height;
  transform: translate3d(0, 0, 10px);
  transition: max-height 0.2s;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  & > .heading {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    &:focus,
    &:focus-within {
      & > span {
        outline: auto;
      }
    }

    & > p {
      font-size: 1.25rem;
      color: ${colors.grey};
      margin: 0 0.5rem;
    }
    & > span {
      padding: 0.5rem;
      transition: transform 0.2s;
      transform-origin: center center;
      &.flip {
        transform: scaleY(-1) translateY(-25%);
      }
      & > div {
        border: solid ${colors.lightGrey};
        border-width: 0 0.15rem 0.15rem 0;
        height: 0.6rem;
        width: 0.6rem;
        transform: rotate(45deg);
      }
    }
  }
  & > .items {
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    padding: 0.5rem 1.25rem;
    background: rgba(0, 0, 0, 0.05);
    & > a {
      font-family: ${fonts.serif};
      color: ${colors.darkBlue};
      font-size: 1.1rem;
      padding: 0.5rem;
      text-decoration: none;
      padding: 0.5rem;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
