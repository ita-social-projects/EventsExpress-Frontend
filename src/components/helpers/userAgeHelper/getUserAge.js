import moment from "moment";
import { NOT_SPECIFIED } from "../../../constants/labelConstants";

const getAge = birthday => {
  const birthDate = moment(birthday, "DD/MM/YYYY");
  if (!birthDate.isValid()) {
    return NOT_SPECIFIED;
  }

  const today = moment(new Date(), "DD/MM/YYYY");
  const age = today.diff(birthDate, "years");
  if (age <= 0 || age > 100) {
    return NOT_SPECIFIED;
  }

  return age;
};

export default getAge;
