import * as SignalR from "@aspnet/signalr";
import { UserService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";
import { jwtStorageKey } from "../../constants/constants";

export const GET_USERS_DATA = "GET_USERS_DATA";
export const SET_USERS_HUB = "CONNECT_USERS_HUB";
export const RESET_USERS_HUB = "RESET_USERS_HUB";
export const RESET_USERS = "RESET_USERS";
export const CHANGE_USERS_FILTER = "CHANGE_USERS_FILTER";
export const GET_USERS_COUNT = "GET_USERS_COUNT";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const accountStatus = {
  All: 0,
  Activated: 1,
  Blocked: 2,
};

const apiService = new UserService();

function getCountData(data) {
  return {
    type: GET_USERS_COUNT,
    payload: data,
  };
}

function getUsersData(data) {
  return {
    type: GET_USERS_DATA,
    payload: data,
  };
}

function changeStatusData(data) {
  return {
    type: CHANGE_STATUS,
    payload: data,
  };
}

function changeFiltersData(data) {
  return {
    type: CHANGE_USERS_FILTER,
    payload: data,
  };
}

function setHubData(data) {
  return {
    type: SET_USERS_HUB,
    payload: data,
  };
}

function resetHubData() {
  return {
    type: RESET_USERS_HUB,
    payload: null,
  };
}

export function resetUsers() {
  return {
    type: RESET_USERS,
  };
}

export function getCount(status) {
  return async dispatch => {
    const response = await apiService.getCount(status);

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(getCountData(jsonRes));

    return Promise.resolve();
  };
}
export function initialConnection() {
  return async (dispatch, getState) => {
    const hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl(`${window.location.origin}/usersHub`, {
        accessTokenFactory: () => localStorage.getItem(jwtStorageKey),
      })
      .build();

    try {
      await hubConnection.start();
      hubConnection.on("CountUsers", () => {
        dispatch(getCount(getState().users.status ?? accountStatus.All));
      });
    } catch (err) {
      // TODO in the future need to create normal error handling
      // eslint-disable-next-line no-console
      console.error(err.toString());
    }

    dispatch(setHubData(hubConnection));
  };
}

export function closeConnection() {
  return async (dispatch, getState) => {
    await getState().hubConnections.usersHub.stop();
    dispatch(resetHubData());

    return Promise.resolve();
  };
}

export function getUsers(filters) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getUsers(filters);
    dispatch(getRequestDec());

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(getUsersData(jsonRes));

    return Promise.resolve();
  };
}

export function changeStatus(status) {
  return dispatch => {
    dispatch(changeStatusData(status));
  };
}

export function changeFilter(filters) {
  return dispatch => {
    dispatch(changeFiltersData(filters));
  };
}

export function getSearchUsers(filters) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getSearchUsers(filters);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getUsersData(jsonRes));
    return Promise.resolve();
  };
}
