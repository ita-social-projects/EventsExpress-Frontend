import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import contactAdmin from "../../actions/contactAdmin/contact-admin-add-action";
import isValidEmail from "../helpers/validators/email-address-validator";
import { maxLength30 } from "../helpers/validators/min-max-length-validators";
import fieldIsRequired from "../helpers/validators/required-fields-validator";
import { REPORT_FORM_TITLE } from "../../constants/ReportForm";
import ReportForm from "../ReportForm/ReportForm";
import "./ReportPage.scss";

const ReportPage = ({ handleReportFormSubmit }) => {
  const validate = values => {
    const errors = {};
    const requiredFields = ["email", "description"];
    if (maxLength30(values.title)) {
      errors.title = "Title should be less 30 symbols";
    }

    return {
      ...errors,
      ...fieldIsRequired(values, requiredFields),
      ...isValidEmail(values.email),
    };
  };
  const onHandleReportFormSubmit = values => {
    const validatedValues = {
      ...values,
      subject: +values.subject,
    };
    handleReportFormSubmit(validatedValues);
  };
  return (
    <div className="report__container">
      <h3 className="report-container__title">{REPORT_FORM_TITLE}</h3>
      <Form
        onSubmit={onHandleReportFormSubmit}
        validate={validate}
        render={formProps => <ReportForm {...formProps} />}
      />
    </div>
  );
};

ReportPage.propTypes = {
  handleReportFormSubmit: PropTypes.func,
};

ReportPage.defaultProps = {
  handleReportFormSubmit: () => {},
};

const mapDispatchToProps = dispatch => {
  return {
    handleReportFormSubmit: data => dispatch(contactAdmin(data)),
  };
};

export default connect(null, mapDispatchToProps)(ReportPage);
