import { SubmissionError } from "redux-form";
import { AuthenticationService } from "../../services";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const recoverPasswordStates = {
  DATA: "SET_RECOVERPASSWORD_STATE",
};

const apiService = new AuthenticationService();

const setRecoverPasswordStateError = data => {
  return {
    type: recoverPasswordStates.DATA,
    payload: data,
  };
};

const recoverPassword = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setRecoverPassword(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setRecoverPasswordStateError(true));
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(setRecoverPasswordStateError(false));
    return Promise.resolve();
  };
};

export default recoverPassword;
