import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import leaveModal from "../../../constants/EventLeaveModal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const { LEAVE, EXIT_EVENT, ALERT_LEAVE_EVENT, AGREE, DISAGREE } = leaveModal;
class EventLeaveModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClickOpen}
          type="button"
          className="btn btn-danger join-leave"
          variant="contained"
        >
          {LEAVE}
        </button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{EXIT_EVENT}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              `{ALERT_LEAVE_EVENT}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {DISAGREE}
            </Button>
            <Button onClick={this.props.submitLeave} color="secondary">
              {AGREE}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EventLeaveModal.propTypes = {
  submitLeave: PropTypes.func,
};

EventLeaveModal.defaultProps = {
  submitLeave: () => {},
};

export default EventLeaveModal;
