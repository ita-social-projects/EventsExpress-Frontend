import getAge from "./get-age-string";
import LABELS from "../../constants/labelConstants";

const defineUserAge = birthday => {
  return Number.isNaN(getAge(birthday)) || !getAge(birthday)
    ? LABELS.NOT_SPECIFIED
    : getAge(birthday);
};

export default defineUserAge;
