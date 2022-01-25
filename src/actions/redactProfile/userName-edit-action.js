import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const editUsername = {
  UPDATE: "UPDATE_USERNAME",
};

const api_serv = new UserService();

export default function edit_Username(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await api_serv.setUsername(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateUsername(data));
    dispatch(setSuccessAllert("Username is changed"));
    return Promise.resolve();
  };
}

function updateUsername(data) {
  return {
    type: editUsername.UPDATE,
    payload: data,
  };
}
