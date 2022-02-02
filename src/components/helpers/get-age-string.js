import moment from "moment";

const getAge = birthday => {
  const today = new Date();
  const date = moment(today);
  const birthDate = moment(birthday);
  let age = date.diff(birthDate, "years");

  if (age >= 100) {
    age = "---";
  }

  return age;
};

export default getAge;
