import { createBrowserHistory } from "history";
import { SubmissionError } from "redux-form";
import { AuthenticationService } from "../../services";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { buildValidationState } from "../../helpers/actionHelpers";

const apiService = new AuthenticationService();
const history = createBrowserHistory({ forceRefresh: true });

const register = (email, password) => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setRegister({
      Email: email,
      Password: password,
    });
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    history.push("/registerSuccess");
    return Promise.resolve();
  };
};

export default register;
