import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import { renderTextField } from "../../helpers/form-helpers";
import fieldIsRequired from "../../helpers/validators/required-fields-validator";
import profileConstants from "../../../constants/profileConstants";

const { fields, fieldsLabel, PASSWORD_NOT_MATCH } = profileConstants;

const validate = values => {
  const errors = {};
  if (values.newPassword !== values.repeatPassword) {
    errors.repeatPassword = PASSWORD_NOT_MATCH;
  }
  return {
    ...fieldIsRequired(values, fields),
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
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { SUBMIT, CLEAR, CHANGE_PASSWORD } = profileConstants;
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
        <Typography>{CHANGE_PASSWORD}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <MuiThemeProvider>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column">
                {fields.map((field, index) => (
                  <Field
                    key={field}
                    name={field}
                    label={fieldsLabel[index]}
                    component={renderTextField}
                    type="password"
                    className="mb-3"
                  />
                ))}
              </div>
              {error && <ErrorMessages error={error} className="text-center" />}

              <Button
                type="submit"
                color="primary"
                disabled={pristine || submitting}
              >
                {SUBMIT}
              </Button>
              <Button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                {CLEAR}
              </Button>
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
