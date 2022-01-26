import { EventService } from "../services";
import { setErrorAllertFromResponse } from "./alert-action";
import { getRequestInc, getRequestDec } from "./request-count-action";

//! FIX IMPORT IN \src\reducers\event-item-view.js
export const getRateStates = {
  PENDING: "GET_RATE_PENDING",
  SUCCESS: "GET_RATE_SUCCESS",
};

export const getAverageRateStates = {
  PENDING: "GET_AVERAGE_RATE_PENDING",
  SUCCESS: "GET_AVERAGE_RATE_SUCCESS",
};

export const setRateStates = {
  PENDING: "SET_RATE_PENDING",
  SUCCESS: "SET_RATE_SUCCESS",
};

const API_SERV = new EventService();

function getAverageRatingPending(data) {
  return {
    type: getAverageRateStates.PENDING,
    payload: data,
  };
}

function getAverageRatingSuccess(data) {
  return {
    type: getAverageRateStates.SUCCESS,
    payload: data,
  };
}

function getRatingPending(data) {
  return {
    type: getRateStates.PENDING,
    payload: data,
  };
}

function getRatingSuccess(data) {
  return {
    type: getRateStates.SUCCESS,
    payload: data,
  };
}
//! MAKE AC FOR THE FURUTE FUNCTION
// eslint-disable-next-line no-unused-vars
function setRatingPending(data) {
  return {
    type: setRateStates.PENDING,
    payload: data,
  };
}

function setRatingSuccess(data) {
  return {
    type: setRateStates.SUCCESS,
    payload: data,
  };
}

export function setRating(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.setRate(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(setRatingSuccess(jsonRes));
    dispatch(getRatingSuccess(data.rate));
    return Promise.resolve();
  };
}

export function getCurrrentRating(data) {
  return async dispatch => {
    dispatch(getRatingPending(true));

    const response = await API_SERV.getCurrentRate(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRatingSuccess(jsonRes));
    return Promise.resolve();
  };
}

export function getAverageRating(data) {
  return async dispatch => {
    dispatch(getAverageRatingPending(true));

    const response = await API_SERV.getAverageRate(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getAverageRatingSuccess(jsonRes));
    return Promise.resolve();
  };
}
