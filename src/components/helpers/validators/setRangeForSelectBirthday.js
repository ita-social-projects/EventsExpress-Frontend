import moment from "moment";

const setRangeForSelectBirthday = (
  oldestDateOfChoice,
  youngestDateOfChoice,
) => {
  /* const oldestDateOfChoice = 115;
    const youngestDateOfChoice = 14; */

  return {
    minValue: moment(new Date()).subtract(oldestDateOfChoice, "years"),
    maxValue: moment(new Date()).subtract(youngestDateOfChoice, "years"),
  };
};

export default setRangeForSelectBirthday;
