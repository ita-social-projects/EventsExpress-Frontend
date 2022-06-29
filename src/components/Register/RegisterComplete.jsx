import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import moment from "moment";

import {
  renderSelectField,
  renderPhoneInput,
  renderDatePicker,
  renderTextField,
} from "../helpers/form-helpers";
import { PLS_COMPLETE_REGISTERATION } from "../../constants/registationConstants";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import {
  MAX_ALLOWABLE_AGE,
  MIN_ALLOWABLE_AGE,
  USER_GENDERS,
} from "../../constants/userConstants";

// TODO: constansts
const RegisterComplete = ({ pristine, submitting, handleSubmit }) => {
  return (
    <>
      <div className="row">
        <h5 className="m-3">{PLS_COMPLETE_REGISTERATION}</h5>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit} className="col-md-6">
          <div className="form-group">
            <Field
              name="email"
              component={renderTextField}
              label="E-mail:"
              type="email"
            />
          </div>
          <div className="form-group">
            <Field
              name="userName"
              component={renderTextField}
              label="User name"
            />
          </div>
          <div className="row">
            <div className="form-group col">
              <Field
                name="birthday"
                id="date"
                label="Birthday"
                minValue={moment(new Date()).subtract(
                  MAX_ALLOWABLE_AGE,
                  "years",
                )}
                maxValue={moment(new Date()).subtract(
                  MIN_ALLOWABLE_AGE,
                  "years",
                )}
                component={renderDatePicker}
              />
            </div>
            <div className="form-group col">
              <Field
                minWidth={210}
                name="gender"
                component={renderSelectField}
                label="Gender"
                parse={Number}
              >
                <option aria-label="None" value={0} />
                <option value={1}>{USER_GENDERS.MALE}</option>
                <option value={2}>{USER_GENDERS.FEMALE}</option>
                <option value={3}>{USER_GENDERS.OTHER}</option>
              </Field>
            </div>
          </div>
          <div className="form-group">
            <Field component={renderPhoneInput} name="phone" label="Phone" />
          </div>
          <div className="form-group">
            <Button
              fullWidth
              type="submit"
              color="primary"
              disabled={pristine || submitting}
            >
              {BUTTON_NAMES.CONTINUE}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

RegisterComplete.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  submitting: false,
};

RegisterComplete.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default RegisterComplete;
