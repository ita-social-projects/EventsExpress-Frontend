import { CommentService } from "../../services";
import getComments from "./comment-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const API_SERV = new CommentService();

const deleteComment = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.setCommentDelete(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getComments(data.eventId));
    return Promise.resolve;
  };
};

export default deleteComment;
