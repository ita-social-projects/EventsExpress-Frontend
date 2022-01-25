﻿import { CommentService } from "../../services";
import getComments from "./comment-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const api_serv = new CommentService();

export default function (data) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await api_serv.setCommentDelete(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getComments(data.eventId));
    return Promise.resolve;
  };
}
