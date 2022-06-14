import { DEF,LIKE,DISLIKE} from "../../constants/userConstants";

const userViewAttitude = attitude => {
  switch (attitude) {
    case 0: {
      return LIKE;
    }
    case 1: {
      return DISLIKE;
    }
    default: {
      return DEF;
    }
  }
};

export default userViewAttitude;
