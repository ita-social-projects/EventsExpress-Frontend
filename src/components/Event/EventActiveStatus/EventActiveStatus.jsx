import React from "react";
import propTypes from "prop-types";

import {
  EVENT_STATUS_ENUM,
  EVENT_STATUS_TITLE,
  EVENT_STATUS_ICON,
  EVENT_STATUS_BUTTON,
} from "../../../constants/eventConstants";

import SimpleModalWithDetails from "../../SimpleModalWithDetails/SimpleModalWithDetails";
import RenderEventButton from "./RenderEventButton";

const EventActiveStatus = ({ eventStatus, eventId, onBlock, onUnBlock }) => {
  switch (eventStatus) {
    case EVENT_STATUS_ENUM.ACTIVE:
      return (
        <SimpleModalWithDetails
          key={eventId + eventStatus}
          data="Are you sure?"
          submitCallback={reason => onBlock(eventId, reason, eventStatus)}
          button={RenderEventButton(
            EVENT_STATUS_TITLE.ACTIVE,
            EVENT_STATUS_BUTTON.TEXT_SUCCESS,
            EVENT_STATUS_ICON.ACTIVE,
          )}
        />
      );
    case EVENT_STATUS_ENUM.BLOCKED:
      return (
        <SimpleModalWithDetails
          key={eventId + eventStatus}
          data="Are you sure?"
          submitCallback={reason => onUnBlock(eventId, reason)}
          button={RenderEventButton(
            EVENT_STATUS_TITLE.BLOCKED,
            EVENT_STATUS_BUTTON.TEXT_DANGER,
            EVENT_STATUS_ICON.BLOCKED,
          )}
        />
      );
    case EVENT_STATUS_ENUM.CANCELED:
      return (
        <>
          {RenderEventButton(
            EVENT_STATUS_TITLE.CANCELED,
            EVENT_STATUS_BUTTON.TEXT_DANGER,
            EVENT_STATUS_ICON.CANCELED,
          )}
        </>
      );
    default:
      return <></>;
  }
};

// TODO: Check prop eventStatus
EventActiveStatus.propTypes = {
  eventStatus: propTypes.bool,
  eventId: propTypes.number,
  onBlock: propTypes.func,
  onUnBlock: propTypes.func,
};

EventActiveStatus.defaultProps = {
  eventStatus: false,
  eventId: null,
  onBlock: () => {},
  onUnBlock: () => {},
};

export default EventActiveStatus;
