import { SubmissionError } from "redux-form";
import { createBrowserHistory } from "history";
import { AuthenticationService } from "../../services";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { setErrorAllertFromResponse } from "../alert-action";
import filterHelper from "../../components/helpers/filterHelper";
import { updateEventsFilters } from "../event/event-list-action";
import { initialConnection } from "../chat/chat-action";
import { getUnreadMessages } from "../chat/chats-action";
import { jwtStorageKey } from "../../constants/constants";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_USER = "SET_USER";

const history = createBrowserHistory({ forceRefresh: true });
const apiService = new AuthenticationService();

export function setUser(data) {
  return {
    type: SET_USER,
    payload: data,
  };
}

export function getUserInfo(profile) {
  return async dispatch => {
    const response = await apiService.getUserInfo();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    if (
      response.status === 204 &&
      history.location.pathname !== "/registerComplete"
    ) {
      history.push("/registerComplete", { profile });
      return Promise.resolve();
    }

    const userInfo = await response.json();
    const eventFilter = {
      ...filterHelper.getDefaultEventFilter(),
      categories: userInfo.categories.map(item => item.id),
    };
    dispatch(setUser(userInfo));
    dispatch(updateEventsFilters(eventFilter));
    localStorage.setItem("id", userInfo.id);
    dispatch(initialConnection());
    dispatch(getUnreadMessages(userInfo.id));

    return Promise.resolve();
  };
}

async function setUserInfo(response, profile, dispatch) {
  const jsonRes = await response.json();
  localStorage.setItem(jwtStorageKey, jsonRes.token);

  dispatch(getUserInfo(profile));
  return Promise.resolve();
}

function loginResponseHandler(call, profile) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await call();
    dispatch(getRequestDec());
    if (!response.ok) {
      localStorage.clear();
      throw new SubmissionError(await buildValidationState(response));
    }
    return setUserInfo(response, profile, dispatch);
  };
}

export function loginGoogle(tokenId, profile) {
  const call = () =>
    apiService.setGoogleLogin({
      TokenId: tokenId,
      Email: profile.email,
      Name: profile.name,
      PhotoUrl: profile.imageUrl,
    });
  return loginResponseHandler(call, {
    email: profile.email,
    name: profile.name,
    type: 0,
  });
}

export function loginFacebook(profile) {
  const call = () =>
    apiService.setFacebookLogin({
      Email: profile.email,
      Name: profile.name,
      PhotoUrl: profile.picture.data.url,
    });
  return loginResponseHandler(call, {
    email: profile.email,
    name: profile.name,
    birthday: profile.birthday,
    gender: profile.gender,
    type: 1,
  });
}

export function loginTwitter(data) {
  const res = () =>
    apiService.setTwitterLogin({
      TokenId: data.oauth_token,
      TokenSecret: data.oauth_token_secret,
      UserId: data.user_id,
      Email: data.email,
      Name: typeof data.name !== "undefined" ? data.name : data.screen_name,
      PhotoUrl: data.image_url,
    });
  return loginResponseHandler(res, {
    email: data.email,
    name: typeof data.name !== "undefined" ? data.name : data.screen_name,
    type: 2,
  });
}

export function loginAfterEmailConfirmation(data) {
  return async dispatch => {
    const response = await apiService.auth(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    return setUserInfo(response, null, dispatch);
  };
}

const login = (email, password) => {
  const call = () =>
    apiService.setLogin({
      Email: email,
      Password: password,
    });
  return loginResponseHandler(call);
};

export default login;
