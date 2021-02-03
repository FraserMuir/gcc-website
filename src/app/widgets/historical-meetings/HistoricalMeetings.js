import React from "react";

export const HistoricalMeetings = ({ frontmatter }) => {
  const { meetings } = frontmatter || {};
  console.log(meetings);
  return (
    <div>
      <h3>Historical Meetings</h3>
    </div>
  );
};
