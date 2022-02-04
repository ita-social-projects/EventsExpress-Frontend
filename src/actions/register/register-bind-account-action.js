import { createBrowserHistory } from "history";
import { SubmissionError } from "redux-form";
import { AuthenticationService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { jwtStorageKey } from "../../constants/constants";

const apiService = new AuthenticationService();
const history = createBrowserHistory({ forceRefresh: true });

const registerBindAccount = data => {
  return async dispatch => {
    const response = await apiService.setRegisterBindAccount(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }

    const jsonRes = await response.json();
    localStorage.setItem(jwtStorageKey, jsonRes.token);
    dispatch(setSuccessAllert("Your profile was updated"));
    history.push("/home");
    return Promise.resolve();
  };
};

export default registerBindAccount;
