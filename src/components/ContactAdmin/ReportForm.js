import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

import contactAdmin from "../../actions/contactAdmin/contact-admin-add-action";

import isValidEmail from "../helpers/validators/email-address-validator";
import { maxLength30 } from "../helpers/validators/min-max-length-validators";
import fieldIsRequired from "../helpers/validators/required-fields-validator";

import { ISSUE_TYPE_ENUM } from "../../constants/issueConstants";

import "./ReportForm.scss";

const ReportForm = ({ handleReportFormSubmit }) => {
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

  return (
    <div className="report__wrapper">
      <div className="report__container">
        <h3 className="report-container__title">Something Wrong? Tell Us!</h3>
        <Form
          onSubmit={values => handleReportFormSubmit(values)}
          validate={validate}
        >
          {({ handleSubmit, pristine, submitting, form }) => (
            <form className="report-form" onSubmit={handleSubmit}>
              <Field
                name="email"
                className="email"
                placeholder="Enter Email"
                value="test@gmail.com"
                component="input"
              />
              <div className="problem-types">
                <h5 className="problem-types__title">Problem Type</h5>
                <Field
                  name="subject"
                  className="problem-types__select"
                  component="select"
                  parse={value => Number(value)}
                >
                  <option value={ISSUE_TYPE_ENUM.NEWCATEGORY}>
                    New Category
                  </option>
                  <option value={ISSUE_TYPE_ENUM.BUGREPORT}>Bug Report</option>
                  <option value={ISSUE_TYPE_ENUM.BADEVENT}>Bad Event</option>
                  <option value={ISSUE_TYPE_ENUM.BADUSER}>Bad User</option>
                  <option value={ISSUE_TYPE_ENUM.OTHER}>Other</option>
                </Field>

                <Field
                  name="title"
                  className="other-problem"
                  component="input"
                  placeholder="Enter Problem Type"
                />
              </div>

              <Field
                name="description"
                placeholder="Problem Description..."
                className="problem-description"
                component="textarea"
              />

              <div className="buttons">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={submitting}
                >
                  Submit
                </button>
                <button
                  disabled={submitting || pristine}
                  onClick={form.reset}
                  type="button"
                  className="btn-reset"
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

ReportForm.propTypes = {
  handleReportFormSubmit: PropTypes.func,
};

ReportForm.defaultProps = {
  handleReportFormSubmit: () => {},
};

const mapDispatchToProps = dispatch => {
  return {
    handleReportFormSubmit: data => dispatch(contactAdmin(data)),
  };
};

export default connect(() => ({}), mapDispatchToProps)(ReportForm);
