import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import RenderTextField from "../../helpers/form-helpers/render-text-field";
import fieldIsRequired from "../../helpers/validators/required-fields-validator";
import { PROFILE_CONSTANTS } from "../../../constants/profileConstants";

const { FIELDS, FIELDS_LABEL, PASSWORD_NOT_MATCH } = PROFILE_CONSTANTS;

export const validate = values => {
  const errors = {};
  if (values.newPassword !== values.repeatPassword) {
    errors.repeatPassword = PASSWORD_NOT_MATCH;
  }
  return {
    ...fieldIsRequired(values, FIELDS),
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

  const { SUBMIT, CLEAR, CHANGE_PASSWORD, PANEL5 } = PROFILE_CONSTANTS;
  return (
    <Accordion expanded={expanded === PANEL5} onChange={handleChange(PANEL5)}>
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
                {FIELDS.map((field, index) => (
                  <Field
                    key={field}
                    name={field}
                    label={FIELDS_LABEL[index]}
                    component={RenderTextField}
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

export default ChangePassword;
