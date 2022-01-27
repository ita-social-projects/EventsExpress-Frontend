import React from "react";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {
  minLength6,
  maxLength15,
} from "../helpers/validators/min-max-length-validators";
import { renderTextField } from "../helpers/form-helpers";
import isValidEmail from "../helpers/validators/email-address-validator";
import fieldIsRequired from "../helpers/validators/required-fields-validator";

const validate = values => {
  const requiredFields = ["password", "email", "type"];

  return {
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

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

const mapStateToProps = state => {
  const { profile } = state.routing.location.state;
  return {
    initialValues: {
      type: profile.type,
    },
    form_values: getFormValues("register-bind-account-form")(state),
  };
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

export default connect(mapStateToProps)(
  reduxForm({
    form: "register-bind-account-form",
    validate,
    enableReinitialize: true,
  })(RegisterBindAccount),
);
