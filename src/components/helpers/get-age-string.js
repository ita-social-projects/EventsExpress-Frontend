import moment from "moment";

const getAge = birthday => {
  const today = new Date();
  const date = moment(today, "DD/MM/YYYY");
  const birthDate = moment(birthday, "DD/MM/YYYY");
  let age = date.diff(birthDate, "years");

  if (age >= 100) {
    age = "---";
  }

  return age;
};

export default getAge;
