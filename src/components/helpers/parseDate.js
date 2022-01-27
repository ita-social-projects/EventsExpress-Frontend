import moment from "moment";

const parseDate = date => {
  const result = moment(date).format("ddd, MMM D LT [GMT]Z");
  return result.toUpperCase();
};

export default parseDate;
