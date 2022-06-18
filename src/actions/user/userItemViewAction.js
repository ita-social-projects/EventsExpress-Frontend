/* eslint-disable consistent-return */
import { UserService } from "../../services";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import { GET_PROFILE_DATA, RESET_USER } from "./userActionTypes";

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
