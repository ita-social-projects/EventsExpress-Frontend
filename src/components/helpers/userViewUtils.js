import { USER_VIEW_LABELS } from '../../constants/userViewConstants';

const { LIKE, DISLIKE } = USER_VIEW_LABELS;

export const userViewAttitude = (attitude) => {
  switch (attitude) {
    case 0: {
      return [LIKE, 'up', 'attitude-like'];
    }
    case 1: {
      return [DISLIKE, 'down', 'attitude-dislike'];
    }
    default: {
      return [false, '', ''];
    }
  }
};
