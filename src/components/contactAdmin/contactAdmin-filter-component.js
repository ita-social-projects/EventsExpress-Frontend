import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import { MultiCheckbox, renderDatePicker } from "../helpers/form-helpers";
import parseEuDate from "../helpers/form-helpers/parseEuDate";
import filterHelper from "../helpers/filterHelper";
import "./contactAdmin-filter.css";
import issueStatusEnum from "../../constants/issue-status-enum";

class ContactAdminFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needInitializeValues: true,
    };
  }

  componentDidUpdate(prevProps) {
    const initialValues = this.props.initialFormValues;

    if (
      !filterHelper.compareObjects(
        initialValues,
        prevProps.initialFormValues,
      ) ||
      this.state.needInitializeValues
    ) {
      this.props.initialize({
        dateFrom: initialValues.dateFrom,
        dateTo: initialValues.dateTo,
        status: initialValues.status,
      });
      this.setState({
        needInitializeValues: false,
      });
    }
  }

  render() {
    const { formValues, submitting, onReset } = this.props;
    const values = formValues || {};
    const options = [
      { value: issueStatusEnum.Open, text: "Open" },
      { value: issueStatusEnum.InProgress, text: "In progress" },
      { value: issueStatusEnum.Resolve, text: "Resolve" },
    ];

    return (
      <>
        <div className="sidebar-filter">
          <form onSubmit={this.props.handleSubmit} className="box">
            <>
              <div className="form-group">
                <Field
                  name="dateFrom"
                  label="From"
                  minValue={new Date(2000, 1, 1)}
                  component={renderDatePicker}
                  parse={parseEuDate}
                />
              </div>
              <div className="form-group">
                <Field
                  name="dateTo"
                  label="To"
                  minValue={new Date(values.dateFrom)}
                  component={renderDatePicker}
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
                Reset
              </Button>
              <Button
                fullWidth
                type="submit"
                color="primary"
                disabled={submitting}
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

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
