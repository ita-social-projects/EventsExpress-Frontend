import { createBrowserHistory } from "history";
import { SubmissionError } from "redux-form";
import { AuthenticationService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { jwtStorageKey } from "../../constants/constants";

const API_SERV = new AuthenticationService();
const history = createBrowserHistory({ forceRefresh: true });

export default function registerBindAccount(data) {
  return async dispatch => {
    const response = await API_SERV.setRegisterBindAccount(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }

    const jsonRes = await response.json();
    localStorage.setItem(jwtStorageKey, jsonRes.token);
    dispatch(setSuccessAllert("Your profile was updated"));
    dispatch(history.push("/home"));
    return Promise.resolve();
  };
}
