import React from "react";
import propTypes from "prop-types";
import eventStatusEnum from "../../../constants/eventStatusEnum";
import eventStatusTitle from "../../../constants/eventStatusTitle";
import eventStatusButton from "../../../constants/eventStatusButton";
import eventStatusIcon from "../../../constants/eventStatusIcon";
import eventActiveStatus from "../../../constants/eventActiveStatus";
import SimpleModalWithDetails from "../../helpers/simple-modal-with-details";
import RenderEventButton from "./RenderEventButton";

const { ACTIVE, BLOCKED, CANCELED } = eventStatusEnum;
const EventActiveStatus = ({ eventStatus, eventId, onBlock, onUnBlock }) => {
  switch (eventStatus) {
    case ACTIVE:
      return (
        <SimpleModalWithDetails
          key={eventId + eventStatus}
          data={eventActiveStatus.ARE_YOU_SURE}
          submitCallback={reason => onBlock(eventId, reason, eventStatus)}
          button={RenderEventButton(
            eventStatusTitle.ACTIVE,
            eventStatusButton.TEXT_SUCCESS,
            eventStatusIcon.ACTIVE,
          )}
        />
      );
    case BLOCKED:
      return (
        <SimpleModalWithDetails
          key={eventId + eventStatus}
          data={eventActiveStatus.ARE_YOU_SURE}
          submitCallback={reason => onUnBlock(eventId, reason)}
          button={RenderEventButton(
            eventStatusTitle.BLOCKED,
            eventStatusButton.TEXT_DANGER,
            eventStatusIcon.BLOCKED,
          )}
        />
      );
    case CANCELED:
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
