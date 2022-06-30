import moment from "moment";
import { NOT_SPECIFIED } from "../../../constants/labelConstants";
import {
  MAX_ALLOWABLE_AGE,
  MIN_ALLOWABLE_AGE,
} from "../../../constants/userConstants";

const getAge = birthday => {
  const birthDate = moment(birthday, "DD/MM/YYYY");
  if (!birthDate.isValid()) {
    return NOT_SPECIFIED;
  }

  const today = moment(new Date(), "DD/MM/YYYY");
  const age = today.diff(birthDate, "years");
  if (age <= MIN_ALLOWABLE_AGE || age > MAX_ALLOWABLE_AGE) {
    return NOT_SPECIFIED;
  }

  return age;
};

export default getAge;
