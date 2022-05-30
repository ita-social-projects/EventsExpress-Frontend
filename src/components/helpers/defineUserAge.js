import getAge from "./get-age-string";

const defineUserAge = birthday => {
  return Number.isNaN(getAge(birthday)) || !getAge(birthday)
    ? "Not specified"
    : getAge(birthday);
};

export default defineUserAge;
