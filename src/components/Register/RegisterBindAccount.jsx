import React from "react";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import {
  minLength6,
  maxLength15,
} from "../helpers/validators/min-max-length-validators";
import RenderTextField from "../helpers/form-helpers/render-text-field";
import { ALREADY_HAVE_ACC } from "../../constants/registationConstants";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

const RegisterBindAccount = ({ pristine, submitting, handleSubmit }) => {
  return (
    <>
      <div className="row">
        <h5 className="m-3">{ALREADY_HAVE_ACC}</h5>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit} className="col-md-6">
          <div className="form-group">
            <Field
              name="email"
              component={RenderTextField}
              label="E-mail:"
              type="email"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              component={RenderTextField}
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
                {BUTTON_NAMES.BIND}
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
