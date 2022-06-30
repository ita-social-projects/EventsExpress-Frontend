/* eslint-disable no-param-reassign */
import { isValidPhoneNumber } from "react-phone-number-input";
import { GENDEX_MAX_VALUE } from "../../constants/validatorsConstants";
import isValidEmail from "./validators/email-address-validator";
import { maxLength, minLength } from "./validators/min-max-length-validators";
import fieldIsRequired from "./validators/required-fields-validator";

const checkFieldsForCorrectLength = (errors, values, fieldWithLength) => {
  fieldWithLength.forEach(({ field, minLen, maxLen }) => {
    if (values[field] && maxLength(maxLen)(values[field])) {
      errors[field] = `${field} must be less ${maxLen} symbols`;
    }

    if (values[field] && minLength(minLen)(values[field])) {
      errors[field] = `${field} must be more ${minLen} symbols`;
    }
  });
};

const checkPasswordsMatch = (errors, values) => {
  if (
    values.password !== values.RepeatPassword &&
    values.password &&
    values.RepeatPassword
  ) {
    errors.RepeatPassword = "Passwords must match";
  }
};

const checkEmailIsValid = (errors, values) => {
  if (values.email && !isValidEmail(values.email)) {
    errors.email = "Email is not valid";
  }
};

const checkIfPhoneNumberIsValid = (errors, values) => {
  if (values.phone && !isValidPhoneNumber(values.phone)) {
    errors.phone = "Invalid phone number";
  }
};

const checkGenderIsValid = (errors, values) => {
  if (values.gender && values.gender > GENDEX_MAX_VALUE) {
    errors.gender = "Invalid gender";
  }
};

// eslint-disable-next-line import/prefer-default-export
export const validate = (requiredFields, fieldWithLength) => values => {
  const errors = {};

  if (fieldWithLength) {
    checkFieldsForCorrectLength(errors, values, fieldWithLength);
  }

  checkPasswordsMatch(errors, values);
  checkEmailIsValid(errors, values);
  checkIfPhoneNumberIsValid(errors, values);
  checkGenderIsValid(errors, values);

  return {
    ...errors,
    ...fieldIsRequired(values, requiredFields),
  };
};
