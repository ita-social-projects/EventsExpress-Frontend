import React, { useEffect, useState } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import MultiCheckbox from "../helpers/form-helpers/MultiCheckbox";
import RenderDatePicker from "../helpers/form-helpers/render-date-pickerV2";
import parseEuDate from "../helpers/form-helpers/parseEuDate";
import { ISSUE_STATUS_ENUM } from "../../constants/issueConstants";
import { compareObjects } from "../helpers/filterHelper/filterHelper";
import "./ContactAdminFilter.scss";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import {
  ADMIN_MIN_DATE_FILTER_YEAR,
  FIRST_DAY,
  FIRST_MONTH,
} from "../../constants/adminConstants";

const ContactAdminFilter = ({
  handleSubmit,
  initialize,
  initialFormValues,
  formValues,
  submitting,
  onReset,
}) => {
  const [needInitializeValues, setInitializeValues] = useState(true);

  useEffect(() => {
    const initialValues = initialFormValues;
    if (
      !compareObjects(initialValues, initialFormValues) ||
      needInitializeValues
    ) {
      initialize({
        dateFrom: initialValues.dateFrom,
        dateTo: initialValues.dateTo,
        status: initialValues.status,
      });
      setInitializeValues(false);
    }
  }, [initialFormValues]);

  const values = formValues || {};
  const options = [
    { value: ISSUE_STATUS_ENUM.OPEN, text: "Open" },
    { value: ISSUE_STATUS_ENUM.INPROGRESS, text: "In progress" },
    { value: ISSUE_STATUS_ENUM.RESOLVE, text: "Resolve" },
  ];

  return (
    <>
      <div className="sidebar-filter">
        <form onSubmit={handleSubmit} className="box">
          <>
            <div className="form-group">
              <Field
                name="dateFrom"
                label="From"
                minValue={
                  new Date(ADMIN_MIN_DATE_FILTER_YEAR, FIRST_MONTH, FIRST_DAY)
                }
                component={RenderDatePicker}
                parse={parseEuDate}
              />
            </div>
            <div className="form-group">
              <Field
                name="dateTo"
                label="To"
                minValue={new Date(values.dateFrom)}
                component={RenderDatePicker}
                parse={parseEuDate}
              />
            </div>
            <div className="form-group">
              <Field
                name="status"
                component={MultiCheckbox}
                options={options}
              />
            </div>
          </>
          <div className="d-flex">
            <Button
              fullWidth
              color="primary"
              onClick={onReset}
              disabled={submitting}
            >
              {BUTTON_NAMES.RESET}
            </Button>
            <Button
              fullWidth
              type="submit"
              color="primary"
              disabled={submitting}
            >
              {BUTTON_NAMES.SUBMIT}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

ContactAdminFilter.propTypes = {
  handleSubmit: propTypes.func,
  initialize: propTypes.func,
  initialFormValues: propTypes.object,
  formValues: propTypes.object,
  submitting: propTypes.bool,
  onReset: propTypes.func,
};

ContactAdminFilter.defaultProps = {
  handleSubmit: () => {},
  initialize: () => {},
  initialFormValues: {},
  formValues: {},
  submitting: false,
  onReset: () => {},
};

const FormContactAdminFilter = reduxForm({
  form: "contactAdmin-filter-form",
})(ContactAdminFilter);

export default FormContactAdminFilter;
