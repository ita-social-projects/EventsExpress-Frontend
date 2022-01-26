/* eslint-disable no-unused-vars */
import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_EVENTS_DATA = "GET_EVENTS_DATA";
export const RESET_EVENTS = "RESET_EVENTS";
export const UPDATE_EVENTS_FILTERS = "UPDATE_EVENTS_FILTERS";

const API_SERV = new EventService();

export function getEventsData(data) {
  return {
    type: GET_EVENTS_DATA,
    payload: data,
  };
}

export function resetEvents() {
  return {
    type: RESET_EVENTS,
  };
}

export function updateEventsFilters(data) {
  return {
    type: UPDATE_EVENTS_FILTERS,
    payload: data,
  };
}
export function getEvents(filters) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.getAllEvents(filters);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEventsData(jsonRes));
    return Promise.resolve();
  };
}

export function getDrafts(page = 1) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.getAllDrafts(page);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEventsData(jsonRes));
    return Promise.resolve();
  };
}

export function getUpcomingEvents(filters) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.getUpcomingEvents();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEventsData(jsonRes));
    return Promise.resolve();
  };
}
