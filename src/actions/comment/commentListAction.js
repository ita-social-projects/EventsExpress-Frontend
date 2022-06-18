import { CommentService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestLocalInc,
  getRequestLocalDec,
} from "../requestCount/requestLocalCountAction";
import { GET_COMMENTS_DATA } from "./commentActionTypes";

const apiService = new CommentService();

function getCommentsInternal(data) {
  return {
    type: GET_COMMENTS_DATA,
    payload: data,
  };
}

const getComments = (data, page = 1) => {
  return async dispatch => {
    dispatch(getRequestLocalInc());
    const response = await apiService.getAllComments(data, page);
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
