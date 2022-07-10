import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import FILTER_OPTIONS_MAPPER from "../../constants/changesTypeEnumConstants";
import {
  MultiCheckbox,
  renderDatePicker,
  renderMultiselect,
  parseEuDate,
} from "../helpers/form-helpers";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

const TracksFilter = ({
  entityNames,
  formValues,
  handleSubmit,
  onReset,
  submitting,
  pristine,
}) => {
  const values = formValues || {};
  const options = FILTER_OPTIONS_MAPPER;
  return (
    entityNames?.length && (
      <form className="box" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <Field
              data={entityNames}
              component={renderMultiselect}
              name="entityNames"
              valueField="id"
              textField="entityName"
              className="form-control mt-2"
              placeholder="Entity name"
            />
          </div>
          <div className="form-group">
            <Field
              options={options}
              component={MultiCheckbox}
              name="changesType"
              className="form-control mt-2"
              placeholder="Changes type"
            />
          </div>
          <div className="form-group">
            <Field
              name="dateFrom"
              label="From"
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
        </div>
        <div className="form-group d-flex">
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
            disabled={pristine || submitting}
          >
            {BUTTON_NAMES.SEARCH}
          </Button>
        </div>
      </form>
    )
  );
};

TracksFilter.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  onReset: () => {},
  submitting: false,
  formValues: {},
  entityNames: [],
};

TracksFilter.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  onReset: PropTypes.func,
  submitting: PropTypes.bool,
  formValues: PropTypes.object,
  entityNames: PropTypes.array,
};

export default reduxForm({ form: "tracks-filter-form" })(TracksFilter);
