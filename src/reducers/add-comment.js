﻿import initialState from "../store/initialState";

export const reducer = (state = initialState.add_comment, action) => {
  switch (action.type) {
    case SET_COMMENT_PENDING:
      return {
        ...state,
        isCommentPending: action.payload,
      };
    case SET_COMMENT_SUCCESS:
      return {
        ...state,
        isCommentPending: false,
        isCommentSuccess: action.payload,
      };
    default:
      break;
  }
  return state;
};
