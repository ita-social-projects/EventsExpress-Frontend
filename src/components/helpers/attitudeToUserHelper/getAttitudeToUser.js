import {
  ATTITUDE_MESSAGES,
  ATTITUDE_ICONS,
} from "../../../constants/UserAttitudeConstants";

const getAttitudeToUser = attitude => {
  // Like = 1, Dislike = -1, Neutral = 0
  if (attitude === 0) {
    return {
      bg: "attitude_bg_green",
      message: ATTITUDE_MESSAGES.LIKE,
      thumb: ATTITUDE_ICONS.THUMB_UP,
    };
  }

  return attitude === 1
    ? {
        bg: "attitude_bg_red",
        message: ATTITUDE_MESSAGES.DISLIKE,
        thumb: ATTITUDE_ICONS.THUMB_DOWN,
      }
    : {
        bg: null,
        message: null,
        thumb: null,
      };
};

export default getAttitudeToUser;
