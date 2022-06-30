import {
  DEF,
  LIKE,
  DISLIKE,
  POSITIVE_ATTITUDE,
  NEGATIVE_ATTITUDE,
} from "../../constants/userConstants";

const userViewAttitude = attitude => {
  switch (attitude) {
    case POSITIVE_ATTITUDE: {
      return LIKE;
    }
    case NEGATIVE_ATTITUDE: {
      return DISLIKE;
    }
    default: {
      return DEF;
    }
  }
};

export default userViewAttitude;
