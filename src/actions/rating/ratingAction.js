import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import {
  getAverageRateStates,
  getRateStates,
  setRateStates,
} from "./ratingActionTypes";

const apiService = new EventService();

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
// TODO: MAKE AC FOR THE FURUTE FUNCTION
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
    const response = await apiService.setRate(data);
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

    const response = await apiService.getCurrentRate(data);
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

    const response = await apiService.getAverageRate(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getAverageRatingSuccess(jsonRes));
    return Promise.resolve();
  };
}
