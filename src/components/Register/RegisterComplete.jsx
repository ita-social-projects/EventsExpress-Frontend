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

// TODO: constansts
const RegisterComplete = ({ pristine, submitting, handleSubmit }) => {
  return (
    <>
      <div className="row">
        <h5 className="m-3">{"Please, complete your registration"}</h5>
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
                minValue={moment(new Date()).subtract(115, "years")}
                maxValue={moment(new Date()).subtract(15, "years")}
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
                <option value={1}>{"Male"}</option>
                <option value={2}>{"Female"}</option>
                <option value={3}>{"Other"}</option>
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
              {"Complete"}
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
