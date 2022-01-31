import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import {
  getRequestLocalInc,
  getRequestLocalDec,
} from "../request-local-count-action";

export const GET_EVENTS_PROFILE_DATA = "GET_EVENTS_PROFILE_DATA";

const apiService = new EventService();

function getEvents(data) {
  return {
    type: GET_EVENTS_PROFILE_DATA,
    payload: data,
  };
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

export function getFutureEvents(id, page = 1) {
  const call = apiService.getFutureEvents;
  return master(call, id, page);
}

export function getPastEvents(id, page = 1) {
  const call = apiService.getPastEvents;
  return master(call, id, page);
}

export function getVisitedEvents(id, page = 1) {
  const call = apiService.getVisitedEvents;
  return master(call, id, page);
}

export function getEventsTogo(id, page = 1) {
  const call = apiService.getEventsToGo;
  return master(call, id, page);
}
