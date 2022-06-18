import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import SelectField from "../shared/SelectField/SelectField";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";

const EditGenderRegister = props => {
  const { handleSubmit } = props;
  return (
    <form name="editGenderRegister" onSubmit={handleSubmit}>
      <div>
        <Field
          minWidth={140}
          name="gender"
          component={SelectField}
          label="Gender"
        >
          <option aria-label="None" value="" />
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </Field>
        {props.error && (
          <ErrorMessages error={props.error} className="text-center" />
        )}
      </div>
    </form>
  );
};
EditGenderRegister.defaultProps = {
  handleSubmit: () => {},
  error: "",
};

EditGenderRegister.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
};

export default reduxForm({
  form: "editGenderRegister",
})(EditGenderRegister);
