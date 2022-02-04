import { SubmissionError } from "redux-form";
import { createBrowserHistory } from "history";
import { EventService } from "../../services";
import getEvent, { getEventData } from "./event-item-view-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";
import { setSuccessAllert, setErrorAllertFromResponse } from "../alert-action";

export const EVENT_WAS_CREATED = "EVENT_WAS_CREATED";

const apiService = new EventService();
const history = createBrowserHistory({ forceRefresh: true });

function eventWasCreated(eventId) {
  return {
    type: EVENT_WAS_CREATED,
    payload: eventId,
  };
}

export function editEvent(data, onError, onSuccess) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.editEvent(data);
    dispatch(getRequestDec());
    if (!response.ok && onError) {
      await onError(response);
    } else if (response.ok && onSuccess) {
      onSuccess(response);
    }
    dispatch(getEventData(data));
    return Promise.resolve();
  };
}

export function publishEvent(eventId) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.publishEvent(eventId);
    dispatch(getRequestDec());
    if (response.ok) {
      dispatch(getEvent(eventId));
      dispatch(setSuccessAllert("Your event has been successfully published!"));
      history.push(`/event/${eventId}/1`);
      dispatch(eventWasCreated(eventId));
      return Promise.resolve();
    }

    throw new SubmissionError(await buildValidationState(response));
  };
}

const addEvent = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setEvent();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const event = await response.json();
    history.push(`/editEvent/${event.id}`);
    return Promise.resolve();
  };
};

export default addEvent;
