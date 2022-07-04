import { EVENTS_API_SERVICES } from "../../constants/eventConstants";
import { setErrorAllertFromResponse } from "../alert-action";
import {
  getRequestLocalInc,
  getRequestLocalDec,
} from "../request-local-count-action";

export const GET_EVENTS_PROFILE_DATA = "GET_EVENTS_PROFILE_DATA";

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

export const getEventsByType = (id, page = 1, type) => {
  return master(EVENTS_API_SERVICES[type], id, page);
};
