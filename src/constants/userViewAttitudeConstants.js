import USER_VIEW_LABELS from "./userViewConstants";

const { LIKE, DISLIKE } = USER_VIEW_LABELS;

export const like = {
  likeDislike: LIKE,
  upDown: "up",
  attitudeLikeDislike: "attitude-like",
};

export const dislike = {
  likeDislike: DISLIKE,
  upDown: "down",
  attitudeLikeDislike: "attitude-dislike",
};

export const def = { likeDislike: false, upDown: "", attitudeLikeDislike: "" };
