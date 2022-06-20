import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";
import EventCard from "../Landing/EventCard/EventCard";
import EventCardModal from "../Landing/EventCard/EventCardModal/EventCardModal";
import { ICON_PROPERTIES } from "../../constants/draftConstants";

const DraftEventCard = ({ event, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const additionalButtons = [
    <button
      type="button"
      key="buckect-btn"
      onClick={() => setIsOpen(prev => !prev)}
    >
      <BsTrash
        cursor={ICON_PROPERTIES.CIRSOR_POINER}
        size={ICON_PROPERTIES.ICON_SIZE}
      />
    </button>,
  ];

  const additionalModal = isOpen ? (
    <EventCardModal
      closeModal={isOpen}
      id={event.id}
      onClose={setIsOpen}
      onClick={onDelete}
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
  onDelete: PropTypes.func,
};

DraftEventCard.defaultProps = {
  event: null,
  onDelete: () => {},
};

export default DraftEventCard;
