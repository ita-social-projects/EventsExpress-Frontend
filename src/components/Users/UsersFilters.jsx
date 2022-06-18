import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import SelectField from "../shared/SelectField/SelectField";
import TextField from "../shared/TextField/TextField";
import RadioButton from "../shared/RadioButton/RadioButton";

const UsersFilters = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit} className="box">
      <Field name="search" component={TextField} type="input" label="Search:" />
      <Field minWidth={150} name="role" component={SelectField} label="Role">
        <option value="" aria-label="Decide rules" />
        <option value="Admin">
          {/* TODO: IT LOOKS WEIRD */}
          Admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </option>
        <option value="User">User</option>
      </Field>
      <br />
      <Field
        minWidth={150}
        name="PageSize"
        component={SelectField}
        label="PageSize"
      >
        <option value="" aria-label="Decide numbers" />
        <option value="5">
          {/* TODO: IT LOOKS WEIRD */}
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </option>
        <option value="10">10</option>
        <option value="15">15</option>
      </Field>
      <br />
      <Field name="status" component={RadioButton}>
        <FormControlLabel value="blocked" control={<Radio />} label="Blocked" />
        <FormControlLabel value="active" control={<Radio />} label="Active" />
        <FormControlLabel value="all" control={<Radio />} label="All" />
      </Field>
      <Button fullWidth type="submit" color="primary" disabled={submitting}>
        Search
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
