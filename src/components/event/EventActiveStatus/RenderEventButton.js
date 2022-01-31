import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const RenderEventButton = ({ eventTitle, eventButton, eventIcon }) => {
  return (
    <Tooltip title={eventTitle}>
      <IconButton className={eventButton} size="middle">
        <i className={eventIcon} />
      </IconButton>
    </Tooltip>
  );
};

export default RenderEventButton;
