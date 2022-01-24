import { USER_VIEW_LABELS } from '../../constants/userViewConstants';

const { LIKE, DISLIKE } = USER_VIEW_LABELS;

export const userViewAttitude = (attitude) => {
  switch (attitude) {
    case 0: {
      return {
        likeDislike: LIKE,
        upDown: 'up',
        attitudeLikeDislike: 'attitude-like',
      };
    }
    case 1: {
      return {
        likeDislike: DISLIKE,
        upDown: 'down',
        attitudeLikeDislike: 'attitude-dislike',
      };
    }
    default: {
      return { likeDislike: false, upDown: '', attitudeLikeDislike: '' };
    }
  }
};
