/* eslint-disable consistent-return */
import { UserService } from "../../services";
import { getRequestInc, getRequestDec } from "../request-count-action";
import { setErrorAllertFromResponse } from "../alert-action";

export const GET_PROFILE_DATA = "GET_PROFILE_DATA";
export const RESET_USER = "RESET_USER";

const apiService = new UserService();

function getProfile(data) {
  return {
    type: GET_PROFILE_DATA,
    payload: data,
  };
}

export function resetUser() {
  return {
    type: RESET_USER,
  };
}

export function setAttitude(data) {
  return async dispatch => {
    const response = await apiService.setAttitude(data);
    if (response.ok) {
      const res = await apiService.getUserById(data.userToId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getProfile(jsonRes));
      return Promise.reject();
    }
  };
}

const getUser = id => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getUserById(id);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getProfile(jsonRes));
    return Promise.resolve();
  };
};

export default getUser;
