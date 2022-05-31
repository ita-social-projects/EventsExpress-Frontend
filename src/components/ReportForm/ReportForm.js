import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
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
  REPORT_FORM_SUBMIT_BUTTON_TEXT,
} from "../../constants/ReportForm";
import "./ReportForm.scss";

const ReportForm = ({ handleSubmit, pristine, submitting, form, values }) => (
  <form className="report-form" onSubmit={handleSubmit}>
    <Field
      name="email"
      className="email"
      placeholder={REPORT_FORM_EMAIL_PLACEHOLDER}
      value="test@gmail.com"
      component={FormInput}
    />
    <div className="problem-types">
      <h5 className="problem-types__title">{REPORT_FORM_PROBLEM_TYPE_TITLE}</h5>
      <Field
        name="subject"
        className="problem-types__select"
        component={FormSelect}
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
          allowNull
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
      <button type="submit" className="btn-submit" disabled={submitting}>
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
);

ReportForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  form: PropTypes.object,
  values: PropTypes.object,
};

ReportForm.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  submitting: false,
  form: {},
  values: {},
};

export default ReportForm;
