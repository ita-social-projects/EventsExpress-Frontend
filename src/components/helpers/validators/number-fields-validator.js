import { NUMBER_FIELDS_VALIDATOR_OPTION } from "../../../constants/validatorsConstants";

const numberField = values => {
  const errors = {};
  const numberFields = ["maxParticipants", "frequency"];

  numberFields.forEach(field => {
    if (values[field] && values[field] < NUMBER_FIELDS_VALIDATOR_OPTION) {
      errors[field] = `Invalid data`;
    }
  });
  return errors;
};

export default numberField;
