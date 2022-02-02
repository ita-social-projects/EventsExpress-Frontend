import { SubmissionError, reset } from "redux-form";
import { AuthenticationService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const changePasswordStates = {
  UPDATE: "UPDATE_PASSWORD",
};

const apiService = new AuthenticationService();

export function changePasswordUpdate(data) {
  return {
    type: changePasswordStates.UPDATE,
    payload: data,
  };
}

const changePassword = data => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setChangePassword(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(setSuccessAllert("Password was succesfully changed"));
    dispatch(reset("ChangePassword"));
    return Promise.resolve();
  };
};
export default changePassword;
