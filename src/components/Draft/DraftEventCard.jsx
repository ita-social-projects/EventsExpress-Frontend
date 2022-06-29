import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import EventCard from "../Landing/EventCard/EventCard";
import EventCardModal from "../Landing/EventCard/EventCardModal/EventCardModal";
import { ICON_PROPERTIES } from "../../constants/draftConstants";
import { CARD_TYPE } from "../../constants/eventConstants";

const DraftEventCard = ({
  event,
  eventId,
  draftModalId,
  setDraftModalId,
  onDelete,
  cardType,
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
    <Link to={`/editEvent/${eventId}`} key={eventId}>
      <AiFillEdit
        key={5}
        cursor={ICON_PROPERTIES.CIRSOR_POINER}
        size={ICON_PROPERTIES.ICON_SIZE}
      />
    </Link>,
  ];
  const additionalModal = draftModalId ? (
    <EventCardModal
      id={draftModalId}
      onClose={setDraftModalId}
      onDelete={onDelete}
    />
  ) : null;

  const getCardButtons = type => {
    return type === CARD_TYPE.HOME
      ? additionalButtons[1]
      : additionalButtons[0];
  };

  return (
    <EventCard
      key={event.id}
      event={event}
      handleClick={onDelete}
      additionalButtons={getCardButtons(cardType)}
      additionalModal={additionalModal}
    />
  );
};

DraftEventCard.propTypes = {
  cardType: PropTypes.string,
  event: PropTypes.object,
  draftModalId: PropTypes.string,
  eventId: PropTypes.string,
  setDraftModalId: PropTypes.func,
  onDelete: PropTypes.func,
};

DraftEventCard.defaultProps = {
  cardType: "",
  event: null,
  draftModalId: "",
  eventId: "",
  setDraftModalId: () => {},
  onDelete: () => {},
};

export default DraftEventCard;
