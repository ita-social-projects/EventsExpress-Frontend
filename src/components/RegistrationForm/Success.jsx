import React, { PureComponent } from "react";
import "./CheckMarkAnimation.scss";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { REGISTRATION_SUCCESSFUL } from "../../constants/authConstants";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

export class Success extends PureComponent {
  render() {
    return (
      <>
        <Grid item sm={12}>
          <h1 style={{ fontSize: 25 }}>{REGISTRATION_SUCCESSFUL}</h1>
        </Grid>
        <div>
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item sm={3} />
          <Grid item sm={3}>
            <Button
              component={Link}
              to="/profile"
              color="primary"
              variant="contained"
              size="large"
            >
              {BUTTON_NAMES.PROFILE_LINK}
            </Button>
          </Grid>
          <Grid item sm={3}>
            <Button
              component={Link}
              to="/home/events"
              color="primary"
              variant="contained"
              size="large"
            >
              {BUTTON_NAMES.EVENTS_LINK}
            </Button>
          </Grid>
          <Grid item sm={3} />
        </Grid>
      </>
    );
  }
}

export default Success;
