import React, { useState } from "react";
import "./EventCardModal.scss";
import PropTypes from "prop-types";
import { DELETE_DRAFT } from "../../../../constants/draftConstants";

const EventCardModal = ({ closeModal, id, onClose, handleClick }) => {
  const [reason, setReason] = useState("");
  const confirm = () => {
    handleClick(id, reason);
    setReason("");
    onClose(!closeModal);
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
          <button
            className="interactBtn"
            onClick={() => onClose(!closeModal)}
            type="button"
          >
            {DELETE_DRAFT.CANCEL}
          </button>
          <button className="interactBtn" onClick={confirm} type="submit">
            {DELETE_DRAFT.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
};

EventCardModal.propTypes = {
  closeModal: PropTypes.bool,
  id: PropTypes.string,
  onClose: PropTypes.func,
  handleClick: PropTypes.func,
};
EventCardModal.defaultProps = {
  closeModal: false,
  id: "",
  onClose: () => {},
  handleClick: () => {},
};
export default EventCardModal;
