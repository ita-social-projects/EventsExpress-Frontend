import { SubmissionError, reset } from "redux-form";
import getComments from "./comment-list-action";
import { CommentService } from "../../services";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

const API_SERV = new CommentService();

const addComent = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.setComment(data);
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
