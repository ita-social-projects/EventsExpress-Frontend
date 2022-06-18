import { EventScheduleService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import {
  GET_EVENTS_SCHEDULE_DATA,
  RESET_EVENTS_SCHEDULE,
} from "./eventScheduleActionTypes";

const apiService = new EventScheduleService();

// TODO: cnahge import in \src\containers\eventSchedules-list.js
export function getEventSchedulesData(data) {
  return {
    type: GET_EVENTS_SCHEDULE_DATA,
    payload: data,
  };
}

export function resetEventsSchedule() {
  return {
    type: RESET_EVENTS_SCHEDULE,
  };
}

export function getEventSchedules() {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getAllEventSchedules();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEventSchedulesData(jsonRes));
    return Promise.resolve();
  };
}
