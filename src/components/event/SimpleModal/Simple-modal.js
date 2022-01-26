import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";
import PropTypes from "prop-types";

class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  onclick = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  onConfirm = () => {
    this.props.action();
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <div role = "button" 
        onClick={this.onclick} 
        onKeyDown={this.onclick}
        tabIndex={0}
        >
          {this.props.button}</div>
        <Dialog open={this.state.isOpen} onClose={this.onClose}>
          <div className="eventCancel">
            <DialogContent>
              <div>{this.props.data}
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                fullWidth
                type="button"
                color="primary"
                onClick={this.onClose}
              >
                Discard
              </Button>
              <Button
                fullWidth
                type="button"
                value="Login"
                color="primary"
                onClick={this.onConfirm}
              >
                Confirm
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </>
    );
  }
}

SimpleModal.propTypes = {
  action: PropTypes.func,
  data: PropTypes.object,
  button: PropTypes.func,
}

SimpleModal.defaultProps = {
  action: () => {},
  data: {},
  button: () => {},
}

export default SimpleModal;


