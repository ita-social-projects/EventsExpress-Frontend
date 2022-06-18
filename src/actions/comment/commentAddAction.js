import { SubmissionError, reset } from "redux-form";
import getComments from "./commentListAction";
import { CommentService } from "../../services";
import { buildValidationState } from "../../helpers/actionHelpers";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";

const apiService = new CommentService();

const addComent = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setComment(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getComments(data.eventId));
    dispatch(reset("add-comment"));
    return Promise.resolve();
  };
};

export default addComent;
