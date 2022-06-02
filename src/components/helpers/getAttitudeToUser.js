import {
  ATTITUDE_MESSAGES,
  ATTITUDE_ICONS,
} from "../../constants/userAttitudesConstants";

const getAttitudeToUser = attitude => {
  let attitudeToUser = {};

  switch (attitude) {
    case 0:
      attitudeToUser = {
        bg: "attitude_bg_green",
        message: ATTITUDE_MESSAGES.LIKE,
        thumb: ATTITUDE_ICONS.THUMB_UP,
      };
      break;
    case 1:
      attitudeToUser = {
        bg: "attitude_bg_red",
        message: ATTITUDE_MESSAGES.DISLIKE,
        thumb: ATTITUDE_ICONS.THUMB_DOWN,
      };
      break;
    default:
      attitudeToUser = { color: null, message: null, thumb: null };
  }
  return attitudeToUser;
};

export default getAttitudeToUser;
