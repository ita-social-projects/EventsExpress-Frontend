import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import "./EventSchedule.scss";
import {
  CREATE_WITHOUT_EDITING,
  CREATE_WITH_EDITING,
  EVENT_SCHEDULE_CONSTS,
} from "../../constants/eventConstants";

const {
  CLICK,
  CANCEL_ONE,
  CANCEL,
  EDITING,
  TO_CANCEL_ALL,
  TO_CANCEL_NEXT,
  TO_CREATE_WITH,
  TO_CREATE_WITHOUT,
} = EVENT_SCHEDULE_CONSTS;

const EventSchedulePopover = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handlePopover = event => {
    setAnchorElement(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorElement(null);
  };

  const onFocusChange = () => {
    setIsFocused(!isFocused);
  };

  return (
    <>
      <Button
        onFocus={onFocusChange}
        style={
          isFocused
            ? { minWidth: "2px", outlineStyle: "none" }
            : { minWidth: "2px" }
        }
        onClick={handlePopover}
      >
        <i className="fas fa-info-circle" />
      </Button>
      <Popover
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Typography style={{ maxWidth: "500px", padding: "15px" }}>
          {CLICK}&quot;{CREATE_WITHOUT_EDITING}&quot;
          {TO_CREATE_WITHOUT}
          {EDITING}
          <br />
          {CLICK}&quot;{CREATE_WITH_EDITING}&quot;
          {TO_CREATE_WITH}
          {EDITING}
          <br />
          {CLICK}&quot;
          {CANCEL_ONE}&quot;
          {TO_CANCEL_NEXT}
          <br />
          {EVENT_SCHEDULE_CONSTS.CLICK}&quot;{CANCEL}
          &quot;{TO_CANCEL_ALL}
          <br />
        </Typography>
      </Popover>
    </>
  );
};

export default EventSchedulePopover;
