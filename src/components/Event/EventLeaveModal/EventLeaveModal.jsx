import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import Transition from "../../shared/Transition/Transition";
import { LEAVE_MODAL } from "../../../constants/eventConstants";

const { LEAVE, EXIT_EVENT, ALERT_LEAVE_EVENT, AGREE, DISAGREE } = LEAVE_MODAL;
const EventLeaveModal = ({ submitLeave }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        type="button"
        className="btn btn-danger join-leave"
        variant="contained"
      >
        {LEAVE}
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{EXIT_EVENT}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {"`"}
            {ALERT_LEAVE_EVENT}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {DISAGREE}
          </Button>
          <Button onClick={submitLeave} color="secondary">
            {AGREE}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EventLeaveModal.propTypes = {
  submitLeave: PropTypes.func,
};

EventLeaveModal.defaultProps = {
  submitLeave: () => {},
};

export default EventLeaveModal;
