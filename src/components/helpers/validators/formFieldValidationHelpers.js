export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const isValidEmail = email => {
  const errors = {};
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const fieldIsRequired = (values, requiredFields) => {
  const errors = {};
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export const numberField = values => {
  const errors = {};
  const numberFields = ["maxParticipants", "frequency"];

  numberFields.forEach(field => {
    if (values[field] && values[field] < 1) {
      errors[field] = `Invalid data`;
    }
  });
  return errors;
};
