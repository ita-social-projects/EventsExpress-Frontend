import { like, dislike, def } from "../../constants/userViewAttitudeConstants";

const userViewAttitude = attitude => {
  switch (attitude) {
    case 0: {
      return like;
    }
    case 1: {
      return dislike;
    }
    default: {
      return def;
    }
  }
};

export default userViewAttitude;
