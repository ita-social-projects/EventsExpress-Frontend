import { SubmissionError } from "redux-form";
import { AuthenticationService } from "../../services";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const recoverPassword = {
  DATA: "SET_RECOVERPASSWORD_STATE",
};

const API_SERV = new AuthenticationService();

export default function recover_Password(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.setRecoverPassword(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setRecoverPasswordStateError(true));
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(setRecoverPasswordStateError(false));
    return Promise.resolve();
  };
}

const setRecoverPasswordStateError = data => {
  return {
    type: recoverPassword.DATA,
    payload: data,
  };
};
