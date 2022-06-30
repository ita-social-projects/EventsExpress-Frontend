import {
  ATTITUDE_MESSAGES,
  ATTITUDE_ICONS,
  NEGATIVE_ATTITUDE,
  POSITIVE_ATTITUDE,
} from "../../../constants/userConstants";

const getAttitudeToUser = attitude => {
  // Like = 0, Dislike = 1
  let attitudeToUser = {};

  switch (attitude) {
    case POSITIVE_ATTITUDE:
      attitudeToUser = {
        bg: "attitude_bg_green",
        message: ATTITUDE_MESSAGES.LIKE,
        thumb: ATTITUDE_ICONS.THUMB_UP,
      };
      break;
    case NEGATIVE_ATTITUDE:
      attitudeToUser = {
        bg: "attitude_bg_red",
        message: ATTITUDE_MESSAGES.DISLIKE,
        thumb: ATTITUDE_ICONS.THUMB_DOWN,
      };
      break;
    default:
      attitudeToUser = { bg: null, message: null, thumb: null };
  }
  return attitudeToUser;
};

export default getAttitudeToUser;
