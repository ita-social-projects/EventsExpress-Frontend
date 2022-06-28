import React from "react";
import { Field, reduxForm } from "redux-form";
import { USER_GENDERS } from "../../constants/userConstants";
import { renderSelectField } from "../helpers/form-helpers";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";

const editGenderRegister = props => {
  const { handleSubmit } = props;
  return (
    <form name="editGenderRegister" onSubmit={handleSubmit}>
      <div>
        <Field
          minWidth={140}
          name="gender"
          component={renderSelectField}
          label="Gender"
        >
          <option aria-label="None" value="" />
          <option value="1">{USER_GENDERS.MALE}</option>
          <option value="2">{USER_GENDERS.FEMALE}</option>
          <option value="3">{USER_GENDERS.OTHER}</option>
        </Field>
        {props.error && (
          <ErrorMessages error={props.error} className="text-center" />
        )}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "editGenderRegister",
})(editGenderRegister);
