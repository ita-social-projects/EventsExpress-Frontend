import React, { useState } from "react";
import "./EventCardModal.scss";
import PropTypes from "prop-types";
import { DELETE_DRAFT } from "../../../../constants/draftConstants";

const EventCardModal = ({ id, onClose, onClick }) => {
  const [reason, setReason] = useState("");
  const deleteDraftEvent = () => {
    onClick(id, reason);
    setReason("");
    onClose(null);
  };
  console.log("ID", id);
  return (
    <div className="wrapper">
      <div className="container">
        <h4 className="titleText">{DELETE_DRAFT.MESSAGE}</h4>
        <div className="inputBlock">
          <input
            id="draftInput"
            type="text"
            className="input"
            onChange={e => setReason(e.target.value)}
          />
        </div>
        <div className="interact">
          <button
            className="interactBtn"
            onClick={() => onClose(null)}
            type="button"
          >
            {DELETE_DRAFT.CANCEL}
          </button>
          <button
            className="interactBtn"
            onClick={deleteDraftEvent}
            type="submit"
          >
            {DELETE_DRAFT.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
};

EventCardModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};
EventCardModal.defaultProps = {
  id: "",
  onClose: () => {},
  onClick: () => {},
};
export default EventCardModal;
