import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import "./EventSchedule.scss";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import { CONFIRMATION } from "../../constants/eventConstants";

const EventScheduleModal = ({
  show,
  message,
  cancelHandler,
  submitHandler,
}) => {
  return (
    <>
      <Modal
        className="custom-center"
        show={show}
        onHide={cancelHandler}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{CONFIRMATION}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button color="primary" variant="outlined" onClick={cancelHandler}>
            {BUTTON_NAMES.CANCEL}
          </Button>
          <Button color="primary" variant="contained" onClick={submitHandler}>
            {BUTTON_NAMES.SUBMIT}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

EventScheduleModal.propTypes = {
  show: PropTypes.func,
  message: PropTypes.string,
  cancelHandler: PropTypes.func,
  submitHandler: PropTypes.func,
};

EventScheduleModal.defaultProps = {
  show: () => {},
  message: "",
  cancelHandler: () => {},
  submitHandler: () => {},
};

export default EventScheduleModal;
