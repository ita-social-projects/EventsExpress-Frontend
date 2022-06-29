import React from "react";
import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";
import EventCard from "../Landing/EventCard/EventCard";
import EventCardModal from "../Landing/EventCard/EventCardModal/EventCardModal";
import { ICON_PROPERTIES } from "../../constants/draftConstants";

const DraftEventCard = ({
  event,
  eventId,
  draftModalId,
  setDraftModalId,
  onDelete,
}) => {
  const additionalButtons = [
    <button
      type="button"
      key="buckect-btn"
      onClick={() => setDraftModalId(eventId)}
    >
      <BsTrash
        cursor={ICON_PROPERTIES.CIRSOR_POINER}
        size={ICON_PROPERTIES.ICON_SIZE}
      />
    </button>,
  ];
  const additionalModal = draftModalId ? (
    <EventCardModal
      id={draftModalId}
      onClose={setDraftModalId}
      onDelete={onDelete}
    />
  ) : null;
  return (
    <EventCard
      key={event.id}
      event={event}
      handleClick={onDelete}
      additionalButtons={additionalButtons}
      additionalModal={additionalModal}
    />
  );
};

DraftEventCard.propTypes = {
  event: PropTypes.object,
  draftModalId: PropTypes.string,
  eventId: PropTypes.string,
  setDraftModalId: PropTypes.func,
  onDelete: PropTypes.func,
};

DraftEventCard.defaultProps = {
  event: null,
  draftModalId: "",
  eventId: "",
  setDraftModalId: () => {},
  onDelete: () => {},
};

export default DraftEventCard;
