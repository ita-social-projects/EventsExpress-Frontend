import { CommentService } from "../../services";
import getComments from "./commentListAction";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";

const apiService = new CommentService();

const deleteComment = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setCommentDelete(data);
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
