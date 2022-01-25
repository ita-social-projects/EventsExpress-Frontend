import { createBrowserHistory } from "history";
import { SubmissionError } from "redux-form";
import jwt from "jsonwebtoken";
import { AuthenticationService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { jwtStorageKey } from "../../constants/constants";

const API_SERV = new AuthenticationService();
const history = createBrowserHistory({ forceRefresh: true });

export default function registerComplete(data) {
  return async dispatch => {
    data.accountId = getAccountIdFromJWT();

    const response = await API_SERV.setRegisterComplete(data);
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

export function getAccountIdFromJWT() {
  const token = localStorage.getItem(jwtStorageKey);
  const decoded = jwt.decode(token);
  return decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"];
}
