import * as moment from "moment";

const getTimeDifferenceFromNull = value => moment.utc(value).fromNow();

export default getTimeDifferenceFromNull;
