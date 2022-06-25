import React, { useState } from "react";
import "./EventCardModal.scss";
import PropTypes from "prop-types";
import { DELETE_DRAFT } from "../../../../constants/draftConstants";
import Button from "../../../shared/Button/Button";

const EventCardModal = ({ id, onClose, onDelete }) => {
  const [reason, setReason] = useState("");
  const deleteDraftEvent = () => {
    onDelete(id, reason);
    setReason("");
    onClose(null);
  };
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
          <Button
            content={DELETE_DRAFT.CANCEL}
            onClick={() => onClose(null)}
            type="button"
            className="interactBtn"
          />
          <Button
            content={DELETE_DRAFT.CONFIRM}
            onClick={deleteDraftEvent}
            type="submit"
            className="interactBtn"
          />
        </div>
      </div>
    </div>
  );
};

EventCardModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};
EventCardModal.defaultProps = {
  id: "",
  onClose: () => {},
  onDelete: () => {},
};
export default EventCardModal;
