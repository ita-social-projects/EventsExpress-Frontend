import moment from "moment";

const parseEventDate = value => {
  return moment(value).format("ddd, MMM D, Y, LT");
};

export default parseEventDate;
