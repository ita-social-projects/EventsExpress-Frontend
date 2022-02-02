import { EventScheduleService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_EVENT_SCHEDULE_DATA = "GET_EVENT_SCHEDULE_DATA";
export const RESET_EVENT_SCHEDULE = "RESET_EVENT_SCHEDULE";

const apiService = new EventScheduleService();

export function resetEventSchedule() {
  return {
    type: RESET_EVENT_SCHEDULE,
    payload: {},
  };
}

function getEventScheduleData(data) {
  return {
    type: GET_EVENT_SCHEDULE_DATA,
    payload: data,
  };
}

const getEventSchedule = id => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getEventSchedule(id);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getEventScheduleData(jsonRes));
    return Promise.resolve();
  };
};

export default getEventSchedule;
