import {
  NEGATIVE_ATTITUDE,
  POSITIVE_ATTITUDE,
} from "../../../constants/userConstants";
import "./Attitude.scss";

const getAttitudeClassName = attitude => {
  switch (attitude) {
    case POSITIVE_ATTITUDE:
      return "attitude-like";
    case NEGATIVE_ATTITUDE:
      return "attitude-dislike";
    default:
      return "";
  }
};

export default getAttitudeClassName;
