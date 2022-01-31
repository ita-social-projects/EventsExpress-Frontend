import React, { useState} from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";
import simpleModalConstants from "../../../constants/sipleModalConstants";

const SimpleModal = (props) => {
  const {data, button} = props;
const [isOpen, setIsOpen] = useState (false);
const [id, setId] = useState (null);

  onclick = () => {
    setIsOpen(true);
  };

  onClose = () => {
    setIsOpen(false);
    setId (null);
  };

  onConfirm = () => {
   props.action();
   setIsOpen (false);
  };

 
    return (
      <>
        <div onClick={onclick}>{button}</div>
        <Dialog open={isOpen} onClose={onClose}>
          <div className="eventCancel">
            <DialogContent>
              <div>{data}</div>
            </DialogContent>
            <DialogActions>
              <Button
                fullWidth={true}
                type="button"
                color="primary"
                onClick={onClose}
              >
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
}

export default SimpleModal