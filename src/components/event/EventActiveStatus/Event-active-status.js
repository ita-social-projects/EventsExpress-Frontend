import React from "react";
import propTypes from "prop-types";
import eventStatusEnum from "../../../constants/eventStatusEnum";
import eventStatusTitle from "../../../constants/eventStatusTitle";
import eventStatusButton from "../../../constants/eventStatusButton";
import eventStatusIcon from "../../../constants/eventStatusIcon";
import SimpleModalWithDetails from "../../helpers/simple-modal-with-details";
import RenderEventButton from "./RenderEventButton";

const EventActiveStatus = ({ eventStatus, eventId, onBlock, onUnBlock }) => {
  switch (eventStatus) {
    case eventStatusEnum.Active:
      return (
        <SimpleModalWithDetails
          key={eventId + eventStatus}
          data="Are you sure?"
          submitCallback={reason => onBlock(eventId, reason, eventStatus)}
          button={RenderEventButton(
            eventStatusTitle.ACTIVE,
            eventStatusButton.TEXT_SUCCESS,
            eventStatusIcon.ACTIVE,
          )}
        />
      );
    case eventStatusEnum.Blocked:
      return (
        <SimpleModalWithDetails
          key={eventId + eventStatus}
          data="Are you sure?"
          submitCallback={reason => onUnBlock(eventId, reason)}
          button={RenderEventButton(
            eventStatusTitle.BLOCKED,
            eventStatusButton.TEXT_DANGER,
            eventStatusIcon.BLOCKED,
          )}
        />
      );
    case eventStatusEnum.Canceled:
      return (
        <>
          {RenderEventButton(
            eventStatusTitle.CANCELED,
            eventStatusButton.TEXT_DANGER,
            eventStatusIcon.CANCELED,
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
