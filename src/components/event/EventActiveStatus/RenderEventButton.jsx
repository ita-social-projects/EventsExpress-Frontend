import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import propTypes from "prop-types";

const RenderEventButton = ({ eventTitle, eventButton, eventIcon }) => {
  return (
    <Tooltip title={eventTitle}>
      <IconButton className={eventButton} size="middle">
        <i className={eventIcon} />
      </IconButton>
    </Tooltip>
  );
};

RenderEventButton.propTypes = {
  eventTitle: propTypes.string,
  eventButton: propTypes.string,
  eventIcon: propTypes.string,
};

RenderEventButton.defaultProps = {
  eventTitle: "",
  eventButton: "",
  eventIcon: "",
};

export default RenderEventButton;
