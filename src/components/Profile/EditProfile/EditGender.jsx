﻿import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import RenderSelectField from "../../helpers/form-helpers/render-select-field";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import { PROFILE_CONSTANTS } from "../../../constants/profileConstants";
import { NEXT_GENDER_STEP } from "../../../constants/userConstants";

const EditGender = ({ handleSubmit, pristine, submitting, error }) => {
  const { GENDERS, SUBMIT } = PROFILE_CONSTANTS;
  return (
    <form name="EditGender" onSubmit={handleSubmit}>
      <div>
        <Field
          minWidth={210}
          name="gender"
          component={RenderSelectField}
          label="Gender"
        >
          <option aria-label="None" value="" />
          {GENDERS.map((gender, index) => (
            <option key={gender} value={index + NEXT_GENDER_STEP}>
              {gender}
            </option>
          ))}
        </Field>
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>

      <Button type="submit" color="primary" disabled={pristine || submitting}>
        {SUBMIT}
      </Button>
    </form>
  );
};

EditGender.defaultProps = {
  pristine: false,
  submitting: false,
  error: "",
  handleSubmit: () => {},
};

EditGender.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default EditGender;
