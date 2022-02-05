import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ErrorMessages from "../../shared/errorMessage";
import { renderTextField } from "../../helpers/form-helpers";
import fieldIsRequired from "../../helpers/validators/required-fields-validator";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const validate = values => {
  const errors = {};
  const requiredFields = ["oldPassword", "newPassword", "repeatPassword"];
  if (values.newPassword !== values.repeatPassword) {
    errors.repeatPassword = "Passwords do not match";
  }
  return {
    ...fieldIsRequired(values, requiredFields),
    ...errors,
  };
};

const ChangePassword = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  error,
}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel5"}
      onChange={handleChange("panel5")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>Change Password</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <MuiThemeProvider>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column">
                <Field
                  name="oldPassword"
                  label="Input current password"
                  component={renderTextField}
                  type="password"
                  className="mb-3"
                />

                <Field
                  name="newPassword"
                  label="Input new password"
                  component={renderTextField}
                  type="password"
                  className="mb-3"
                />

                <Field
                  name="repeatPassword"
                  type="password"
                  label="Repeat new password"
                  component={renderTextField}
                  className="mb-3"
                />
              </div>
              {error && <ErrorMessages error={error} className="text-center" />}

              <div>
                <Button
                  type="submit"
                  color="primary"
                  disabled={pristine || submitting}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  Clear
                </Button>
              </div>
            </form>
          </MuiThemeProvider>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

ChangePassword.defaultProps = {
  pristine: false,
  reset: () => {},
  submitting: false,
  error: "",
  handleSubmit: () => {},
};

ChangePassword.propTypes = {
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "ChangePassword",
  validate,
})(ChangePassword);

ChangePassword.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.array,
};

ChangePassword.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,
  error: [],
};
