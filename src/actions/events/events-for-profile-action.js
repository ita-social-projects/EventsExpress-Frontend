﻿import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import {
  getRequestLocalInc,
  getRequestLocalDec,
} from "../request-local-count-action";

export const GET_EVENTS_PROFILE_DATA = "GET_EVENTS_PROFILE_DATA";

const api_serv = new EventService();

export function get_future_events(id, page = 1) {
  const call = api_serv.getFutureEvents;
  return master(call, id, page);
}

export function get_past_events(id, page = 1) {
  const call = api_serv.getPastEvents;
  return master(call, id, page);
}

export function get_visited_events(id, page = 1) {
  const call = api_serv.getVisitedEvents;
  return master(call, id, page);
}

export function get_events_togo(id, page = 1) {
  const call = api_serv.getEventsToGo;
  return master(call, id, page);
}

function master(call, id, page) {
  return async dispatch => {
    dispatch(getRequestLocalInc());
    const response = await call(id, page);
    dispatch(getRequestLocalDec());

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(getEvents(jsonRes));

    return Promise.resolve();
  };
}

function getEvents(data) {
  return {
    type: GET_EVENTS_PROFILE_DATA,
    payload: data,
  };
}
