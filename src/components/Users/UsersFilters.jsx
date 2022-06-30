import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  renderSelectField,
  renderTextField,
  radioButton,
} from "../helpers/form-helpers";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import { USER_LABEL } from "../../constants/labelConstants";
import {
  MAX_USER_AMOUNT,
  MIN_USER_AMOUNT,
} from "../../constants/userConstants";

const UsersFilters = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit} className="box">
      <Field
        name="search"
        component={renderTextField}
        type="input"
        label="Search:"
      />
      <Field
        minWidth={150}
        name="role"
        component={renderSelectField}
        label="Role"
      >
        <option value="" aria-label="Decide rules" />
        <option value="Admin">
          {/* TODO: IT LOOKS WEIRD */}
          {"Admin"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </option>
        <option value="User">{USER_LABEL}</option>
      </Field>
      <br />
      <Field
        minWidth={150}
        name="PageSize"
        component={renderSelectField}
        label="PageSize"
      >
        <option value="" aria-label="Decide numbers" />
        <option value="5">
          {/* TODO: IT LOOKS WEIRD */}
          {"5"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </option>
        <option value="10">{MIN_USER_AMOUNT}</option>
        <option value="15">{MAX_USER_AMOUNT}</option>
      </Field>
      <br />
      <Field name="status" component={radioButton}>
        <FormControlLabel value="blocked" control={<Radio />} label="Blocked" />
        <FormControlLabel value="active" control={<Radio />} label="Active" />
        <FormControlLabel value="all" control={<Radio />} label="All" />
      </Field>
      <Button fullWidth type="submit" color="primary" disabled={submitting}>
        {BUTTON_NAMES.SEARCH}
      </Button>
    </form>
  );
};

UsersFilters.defaultProps = {
  handleSubmit: () => {},
  submitting: false,
};

UsersFilters.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: "users-filter-form",
})(UsersFilters);
