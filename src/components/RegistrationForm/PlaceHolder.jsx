import React from "react";
import propTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import { reduxForm } from "redux-form";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

const PlaceHolder = ({ handleSubmit, previousPage }) => {
  return (
    <div style={{ width: "97%", padding: "10px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item sm={12} justify="center">
            <Button
              type="button"
              className="previous"
              onClick={previousPage}
              color="primary"
              variant="text"
              size="large"
            >
              {BUTTON_NAMES.BACK}
            </Button>
            <Button
              type="submit"
              className="next"
              color="primary"
              variant="contained"
              size="large"
            >
              {BUTTON_NAMES.CONTINUE}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

PlaceHolder.propTypes = {
  handleSubmit: propTypes.func,
  previousPage: propTypes.func,
};

PlaceHolder.defaultProps = {
  handleSubmit: () => {},
  previousPage: () => {},
};

export default reduxForm({
  form: "registrationForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PlaceHolder);
