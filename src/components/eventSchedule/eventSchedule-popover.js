import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import "./eventSchedule.css";

class EventSchedulePopover extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      isFocused: false,
    };
  }

  handlePopover = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handlePopoverClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  onFocusChange = () => {
    this.setState({ isFocused: true });
  };

  render() {
    return (
      <>
        <Button
          onFocus={this.onFocusChange}
          style={
            this.state.isFocused
              ? { minWidth: "2px", outlineStyle: "none" }
              : { minWidth: "2px" }
          }
          onClick={this.handlePopover}
        >
          <i className="fas fa-info-circle" />
        </Button>
        <Popover
          open={Boolean(this.state.anchorEl)}
          anchorEl={this.state.anchorEl}
          onClose={this.handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Typography style={{ maxWidth: "500px", padding: "15px" }}>
            Click &quot;Create without editing&quot; to create the event without
            editing.
            <br />
            Click &quot;Create with editing&quot; to create the event with
            editing.
            <br />
            Click &quot;Cancel Once&quot; to cancel the next event.
            <br />
            Click &quot;Cancel&quot; to cancel all events.
            <br />
          </Typography>
        </Popover>
      </>
    );
  }
}

export default EventSchedulePopover;
