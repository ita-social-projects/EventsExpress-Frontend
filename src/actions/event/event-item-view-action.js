import { EventService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_EVENT_DATA = "GET_EVENT_DATA";
export const RESET_EVENT = "RESET_EVENT";

export const event = {
  CHANGE_STATUS: "UPDATE_EVENT",
};

const api_serv = new EventService();

export default function get_event(id) {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await api_serv.getEvent(id);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEvent(jsonRes));
    dispatch(getRequestDec());
    return Promise.resolve();
  };
}

export function leave(userId, eventId) {
  return async dispatch => {
    const response = await api_serv.setUserFromEvent({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await api_serv.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEvent(jsonRes));
      return Promise.reject();
    }
  };
}

export function join(userId, eventId) {
  return async dispatch => {
    const response = await api_serv.setUserToEvent({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await api_serv.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEvent(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION APPROVER FOR USER
export function approveUser(userId, eventId, buttonAction) {
  return async dispatch => {
    const response = await api_serv.setApprovedUser({
      userId,
      eventId,
      buttonAction,
    });
    if (response.ok) {
      const res = await api_serv.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEvent(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION CREATOR FOR DELETE FROM OWNERS:
export function deleteFromOwners(userId, eventId) {
  return async dispatch => {
    const response = await api_serv.onDeleteFromOwners({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await api_serv.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEvent(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION CREATOR FOR PROMOTE TO OWNER:
export function promoteToOwner(userId, eventId) {
  return async dispatch => {
    const response = await api_serv.onPromoteToOwner({
      userId,
      eventId,
    });
    if (response.ok) {
      const res = await api_serv.getEvent(eventId);
      if (!res.ok) {
        dispatch(setErrorAllertFromResponse(response));
        return Promise.reject();
      }
      const jsonRes = await res.json();
      dispatch(getEvent(jsonRes));
      return Promise.reject();
    }
  };
}

// ACTION CREATOR FOR CHANGE EVENT STATUS:
export function change_event_status(eventId, reason, eventStatus) {
  return async dispatch => {
    const response = await api_serv.setEventStatus({
      EventId: eventId,
      Reason: reason,
      EventStatus: eventStatus,
    });
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(changeEventStatus(eventId, eventStatus));
    return Promise.resolve();
  };
}

export function resetEvent() {
  return {
    type: RESET_EVENT,
    payload: {},
  };
}

export function getEvent(data) {
  return {
    type: GET_EVENT_DATA,
    payload: data,
  };
}

// CHANGE EVENT ACTIONS
function changeEventStatus(id, eventStatus) {
  return {
    type: event.CHANGE_STATUS,
    payload: { eventId: id, eventStatus },
  };
}
