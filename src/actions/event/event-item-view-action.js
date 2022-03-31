/* eslint-disable consistent-return */
import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_EVENT_DATA = "GET_EVENT_DATA";
export const RESET_EVENT = "RESET_EVENT";

export const event = {
  CHANGE_STATUS: "UPDATE_EVENT",
};

const apiService = new EventService();

export function resetEvent() {
  return {
    type: RESET_EVENT,
    payload: {},
  };
}

export function getEventData(data) {
  return {
    type: GET_EVENT_DATA,
    payload: data,
  };
}

// CHANGE EVENT ACTIONS
function changeEventStatusData(id, eventStatus) {
  return {
    type: event.CHANGE_STATUS,
    payload: { eventId: id, eventStatus },
  };
}

export function leave(userId, eventId) {
  return async dispatch => {
    const response = await apiService.setUserFromEvent({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await apiService.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEventData(jsonRes));
      return Promise.reject();
    }
  };
}

export function join(userId, eventId) {
  return async dispatch => {
    const response = await apiService.setUserToEvent({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await apiService.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEventData(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION APPROVER FOR USER
export function approveUser(userId, eventId, buttonAction) {
  return async dispatch => {
    const response = await apiService.setApprovedUser({
      userId,
      eventId,
      buttonAction,
    });
    if (response.ok) {
      const res = await apiService.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEventData(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION CREATOR FOR DELETE FROM OWNERS:
export function deleteFromOwners(userId, eventId) {
  return async dispatch => {
    const response = await apiService.onDeleteFromOwners({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await apiService.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEventData(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION CREATOR FOR PROMOTE TO OWNER:
export function promoteToOwner(userId, eventId) {
  return async dispatch => {
    const response = await apiService.onPromoteToOwner({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await apiService.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEventData(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION CREATOR FOR CHANGE EVENT STATUS:
export function changeEventStatus(eventId, reason, eventStatus) {
  return async dispatch => {
    const response = await apiService.setEventStatus({
      EventId: eventId,
      Reason: reason,
      EventStatus: eventStatus,
    });
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(changeEventStatusData(eventId, eventStatus));
    return Promise.resolve();
  };
}

const getEvent = id => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getEvent(id);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEventData(jsonRes));
    dispatch(getRequestDec());
    return Promise.resolve();
  };
};

export default getEvent;
