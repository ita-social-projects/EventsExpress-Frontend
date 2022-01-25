import { SubmissionError } from "redux-form";
import { AccountService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import getLinkedAuths from "./linked-auths-action";
import { buildValidationState } from "../../components/helpers/action-helpers";

const API_SERV = new AccountService();

export function localLoginAdd(email, password) {
  return async dispatch => {
    const response = await API_SERV.setLocalLoginAdd({
      Email: email,
      Password: password,
    });
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getLinkedAuths());
    return Promise.resolve();
  };
}

export function googleLoginAdd(tokenId, email) {
  const call = () =>
    API_SERV.setGoogleLoginAdd({
      TokenId: tokenId,
      Email: email,
    });
  return loginResponseHandler(call);
}

export function facebookLoginAdd(email) {
  const call = () =>
    API_SERV.setFacebookLoginAdd({
      Email: email,
    });
  return loginResponseHandler(call);
}

export function twitterLoginAdd(email) {
  const res = () =>
    API_SERV.setTwitterLoginAdd({
      Email: email,
    });
  return loginResponseHandler(res);
}

const loginResponseHandler = call => {
  return async dispatch => {
    const response = await call();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getLinkedAuths());
    return Promise.resolve();
  };
};
