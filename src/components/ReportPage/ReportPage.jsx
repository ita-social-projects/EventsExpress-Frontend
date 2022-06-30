import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import contactAdmin from "../../actions/contactAdmin/contact-admin-add-action";
import { REPORT_FORM_TITLE } from "../../constants/ReportForm";
import ReportForm from "../ReportForm/ReportForm";
import "./ReportPage.scss";
import { validate } from "../helpers/validateHelper";

const ReportPage = ({ handleReportFormSubmit }) => {
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
        validate={validate(
          ["email", "description"],
          [{ field: "title", maxLen: 30 }],
        )}
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
