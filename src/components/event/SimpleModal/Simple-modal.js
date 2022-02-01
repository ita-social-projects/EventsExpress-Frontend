import { DialogContent } from "@material-ui/core";
import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import simpleModalConstants from "../../../constants/sipleModalConstants";

const SimpleModal = props => {
  const { data, button } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [setId] = useState(null);

  const onclick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setId(null);
  };

  const onConfirm = () => {
    props.action();
    setIsOpen(false);
  };

  return (
    <>
      <div role="button" tabIndex={0} onClick={onclick} onKeyDown={onclick}>
        {button}
      </div>
      <Dialog open={isOpen} onClose={onClose}>
        <div className="eventCancel">
          <DialogContent>
            <div>{data}</div>
          </DialogContent>
          <DialogActions>
            <Button fullWidth type="button" color="primary" onClick={onClose}>
              {simpleModalConstants.DISCARD}
            </Button>
            <Button
              fullWidth
              type="button"
              value="Login"
              color="primary"
              onClick={onConfirm}
            >
              {simpleModalConstants.CONFIRM}
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

SimpleModal.propTypes = {
  action: PropTypes.func,
  data: PropTypes.object,
  button: PropTypes.func,
};

SimpleModal.defaultProps = {
  action: () => {},
  data: {},
  button: () => {},
};

export default SimpleModal;
