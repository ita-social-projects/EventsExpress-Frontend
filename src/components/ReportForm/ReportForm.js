import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import contactAdmin from "../../actions/contactAdmin/contact-admin-add-action";
import isValidEmail from "../helpers/validators/email-address-validator";
import { maxLength30 } from "../helpers/validators/min-max-length-validators";
import fieldIsRequired from "../helpers/validators/required-fields-validator";
import FormInput from "../helpers/form-helpers/FormInput/FormInput";
import FormSelect from "../helpers/form-helpers/FormSelect/FormSelect";
import FormTextarea from "../helpers/form-helpers/FormTextarea/FormTextarea";
import {
  ISSUES_TYPES_ENUM,
  ISSUES_TYPES,
  REPORT_FORM_CLEAR_BUTTON_TEXT,
  REPORT_FORM_DESCRIPTION_PLACEHOLDER,
  REPORT_FORM_EMAIL_PLACEHOLDER,
  REPORT_FORM_PROBLEM_TYPE_PLACEHOLDER,
  REPORT_FORM_PROBLEM_TYPE_TITLE,
  REPORT_FORM_TITLE,
  REPORT_FORM_SUBMIT_BUTTON_TEXT,
} from "../../constants/ReportForm";
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
        <h3 className="report-container__title">{REPORT_FORM_TITLE}</h3>
        <Form
          onSubmit={values => handleReportFormSubmit(values)}
          validate={validate}
        >
          {({ handleSubmit, pristine, submitting, form, values }) => (
            <form className="report-form" onSubmit={handleSubmit}>
              <Field
                name="email"
                className="email"
                placeholder={REPORT_FORM_EMAIL_PLACEHOLDER}
                value="test@gmail.com"
                component={FormInput}
              />
              <div className="problem-types">
                <h5 className="problem-types__title">
                  {REPORT_FORM_PROBLEM_TYPE_TITLE}
                </h5>
                <Field
                  name="subject"
                  className="problem-types__select"
                  component={FormSelect}
                  parse={value => Number(value)}
                >
                  {ISSUES_TYPES.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Field>
                {values.subject === ISSUES_TYPES_ENUM.Other && (
                  <Field
                    name="title"
                    className="other-problem"
                    component={FormInput}
                    placeholder={REPORT_FORM_PROBLEM_TYPE_PLACEHOLDER}
                  />
                )}
              </div>

              <Field
                name="description"
                placeholder={REPORT_FORM_DESCRIPTION_PLACEHOLDER}
                className="problem-description"
                component={FormTextarea}
              />

              <div className="buttons">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={submitting}
                >
                  {REPORT_FORM_SUBMIT_BUTTON_TEXT}
                </button>
                <button
                  disabled={submitting || pristine}
                  onClick={form.reset}
                  type="button"
                  className="btn-reset"
                >
                  {REPORT_FORM_CLEAR_BUTTON_TEXT}
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
