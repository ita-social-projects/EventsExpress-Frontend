import moment from "moment";

const dateParser = value => {
  return moment(value).format("ddd, MMM D, Y, LT");
};

export default dateParser;
