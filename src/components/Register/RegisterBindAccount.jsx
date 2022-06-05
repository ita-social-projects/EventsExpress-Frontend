import React from "react";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import {
  minLength6,
  maxLength15,
} from "../helpers/validators/min-max-length-validators";
import { renderTextField } from "../helpers/form-helpers";

const RegisterBindAccount = ({ pristine, submitting, handleSubmit }) => {
  return (
    <>
      <div className="row">
        <h5 className="m-3">Already have an account?</h5>
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
              name="password"
              component={renderTextField}
              label="Password:"
              type="password"
              validate={[maxLength15, minLength6]}
            />
          </div>
          <div className="form-group">
            <DialogActions>
              <Button
                fullWidth
                type="submit"
                color="primary"
                disabled={pristine || submitting}
              >
                Bind
              </Button>
            </DialogActions>
          </div>
        </form>
      </div>
    </>
  );
};

RegisterBindAccount.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  submitting: false,
};

RegisterBindAccount.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default RegisterBindAccount;
