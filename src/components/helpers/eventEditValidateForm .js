import isEmpty from "lodash.isempty";
import { DEFAULT_LOCATION_TYPE } from "../../constants/locationConstants";
import numberField from "./validators/number-fields-validator";
import fieldIsRequired from "./validators/required-fields-validator";

const validate = values => {
  const errors = {};
  const occurenceFields = ["periodicity", "frequency"];
  const requiredFields = ["title", "description", "categories"];
  occurenceFields.forEach(field => {
    if ("occurenceFields".checked && !values[field]) {
      errors[field] = "Required";
    }
  });

  const { categories, selectedPos, maxParticipants, location } = values;

  if (isEmpty(categories)) {
    errors.categories = "Required";
  }
  if (isEmpty(selectedPos)) {
    errors.selectedPos = "Required";
  }
  if (isEmpty(maxParticipants)) {
    errors.maxParticipants = `Invalid data`;
  }

  if (
    location &&
    !location.onlineMeeting &&
    location.type === DEFAULT_LOCATION_TYPE
  ) {
    errors.location = {};
    errors.location.onlineMeeting = "URL cannot be empty";
  }

  return {
    ...errors,
    ...numberField(values),
    ...fieldIsRequired(values, requiredFields),
  };
};

export default validate;
