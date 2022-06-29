import React, { PureComponent } from "react";
import { reduxForm, Field, getFormValues } from "redux-form";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import { renderTextField, renderTextArea } from "../helpers/form-helpers";
import { ISSUE_TYPE_ENUM } from "../../constants/issueConstants";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import isValidEmail from "../helpers/validators/email-address-validator";
import { maxLength30 } from "../helpers/validators/min-max-length-validators";
import fieldIsRequired from "../helpers/validators/required-fields-validator";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import { CONTACT_ADMIN_COMP_CONSTS } from "../../constants/adminConstants";

const validate = values => {
  const errors = {};
  const requiredFields = ["title", "email", "description"];
  if (maxLength30(values.title)) {
    errors.title = "Title should be less 30 symbols";
  }

  return {
    ...errors,
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

class ContactAdmin extends PureComponent {
  render() {
    const { pristine, reset, submitting, error } = this.props;
    return (
      <div id="notfound">
        <div className="notfound">
          <h1 className="f1">{CONTACT_ADMIN_COMP_CONSTS.CONTACT_US}</h1>
          <form className="notfound-404" onSubmit={this.props.handleSubmit}>
            <div className="box text text-2 pl-md-4 ">
              {this.props.user.role === "User" ? (
                <Field
                  name="email"
                  className="form-control"
                  component={renderTextField}
                  value={this.props.email}
                  label="Your e-mail:"
                />
              ) : (
                <Field
                  name="email"
                  className="form-control"
                  component={renderTextField}
                  label="Your e-mail:"
                />
              )}
              <p />
              <p />
              <p />
              <div className="text-left mb-2">
                {CONTACT_ADMIN_COMP_CONSTS.PROBLEM_TYPE}
              </div>
              <Field
                name="subject"
                className="form-control"
                component="select"
                parse={value => Number(value)}
              >
                <option value={ISSUE_TYPE_ENUM.NEWCATEGORY}>
                  {CONTACT_ADMIN_COMP_CONSTS.NEW_CATEGORY}
                </option>
                <option value={ISSUE_TYPE_ENUM.BADUSER}>
                  {CONTACT_ADMIN_COMP_CONSTS.BUG_REPORT}
                </option>
                <option value={ISSUE_TYPE_ENUM.BADEVENT}>
                  {CONTACT_ADMIN_COMP_CONSTS.BAD_EVENT}
                </option>
                <option value={ISSUE_TYPE_ENUM.BADUSER}>
                  {CONTACT_ADMIN_COMP_CONSTS.BAD_USER}
                </option>
                <option value={ISSUE_TYPE_ENUM.OTHER}>
                  {CONTACT_ADMIN_COMP_CONSTS.OTHER}
                </option>
              </Field>

              {this.props.formValues !== undefined &&
                this.props.formValues.subject === ISSUE_TYPE_ENUM.OTHER && (
                  <Field
                    name="title"
                    className="form-control"
                    component={renderTextField}
                    label="Enter problem type:"
                  />
                )}

              <p />
              <p />
              <p />
              <Field
                name="description"
                className="form-control"
                component={renderTextArea}
                type="input"
              />
            </div>
            {error && <ErrorMessages error={error} className="text-center" />}
            <Button
              type="submit"
              color="primary"
              disabled={pristine || submitting}
            >
              {BUTTON_NAMES.SUBMIT}
            </Button>
            <Button
              type="button"
              color="primary"
              disabled={pristine || submitting}
              onClick={reset}
            >
              {BUTTON_NAMES.CLEAR}
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

ContactAdmin.propTypes = {
  pristine: propTypes.bool,
  reset: propTypes.func,
  submitting: propTypes.bool,
  error: propTypes.string,
  user: propTypes.object,
  handleSubmit: propTypes.func,
  email: propTypes.string,
  formValues: propTypes.object,
};

ContactAdmin.defaultProps = {
  pristine: false,
  reset: () => {},
  submitting: false,
  error: "",
  user: {},
  handleSubmit: () => {},
  email: "",
  formValues: {},
};

const mapStateToProps = state => {
  return {
    initialValues: { email: state.user.email },
    formValues: getFormValues("ContactAdmin")(state),
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "ContactAdmin",
    validate,
    enableReinitialize: true,
  })(ContactAdmin),
);
