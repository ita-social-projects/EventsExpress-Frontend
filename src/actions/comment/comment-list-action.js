import { CommentService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import {
  getRequestLocalInc,
  getRequestLocalDec,
} from "../request-local-count-action";

export const GET_COMMENTS_DATA = "GET_COMMENTS_DATA";

const API_SERV = new CommentService();

function getCommentsInternal(data) {
  return {
    type: GET_COMMENTS_DATA,
    payload: data,
  };
}

const getComments = (data, page = 1) => {
  return async dispatch => {
    dispatch(getRequestLocalInc());
    const response = await API_SERV.getAllComments(data, page);
    dispatch(getRequestLocalDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getCommentsInternal(jsonRes));
    return Promise.resolve();
  };
};

export default getComments;
