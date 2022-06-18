/* eslint-disable no-unused-vars */
import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import eventMockup from "../../mockup-db/events";
import {
  GET_EVENTS_DATA,
  RESET_EVENTS,
  UPDATE_EVENTS_FILTERS,
} from "./eventActionTypes";

const apiService = new EventService();

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
    const response = await apiService.getAllEvents(filters);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    // TODO: MOCKUP
    const jsonRes = await response.json();

    dispatch(getEventsData({ ...jsonRes, items: eventMockup }));
    return Promise.resolve();
  };
}

export function getDrafts(page = 1) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getAllDrafts(page);
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
    const response = await apiService.getUpcomingEvents();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    // TODO: MOCKUP
    // const jsonRes = await response.json();
    const jsonRes = await response.json();

    dispatch(getEventsData({ ...jsonRes, items: jsonRes.items }));
    return Promise.resolve();
  };
}
