import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const editUsernameStates = {
  UPDATE: "UPDATE_USERNAME",
};

const apiService = new UserService();

function updateUsername(data) {
  return {
    type: editUsernameStates.UPDATE,
    payload: data,
  };
}

const editUsername = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setUsername(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateUsername(data));
    dispatch(setSuccessAllert("Username is changed"));
    return Promise.resolve();
  };
};

export default editUsername;
