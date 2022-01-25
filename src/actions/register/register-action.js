import { createBrowserHistory } from "history";
import { SubmissionError } from "redux-form";
import { AuthenticationService } from "../../services";
import { getRequestInc, getRequestDec } from "../request-count-action";
import { buildValidationState } from "../../components/helpers/action-helpers";

export const SET_REGISTER_PENDING = "SET_REGISTER_PENDING";
export const SET_REGISTER_SUCCESS = "SET_REGISTER_SUCCESS";

const API_SERV = new AuthenticationService();
const history = createBrowserHistory({ forceRefresh: true });

export default function register(email, password) {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await API_SERV.setRegister({
      Email: email,
      Password: password,
    });
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(history.push("/registerSuccess"));
    return Promise.resolve();
  };
}
