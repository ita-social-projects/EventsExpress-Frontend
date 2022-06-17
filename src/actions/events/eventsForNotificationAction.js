import { EventService } from "../../services";
import { getEvents } from "../event/eventListAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { setErrorAllertFromResponse } from "../alert/alertAction";

const apiService = new EventService();

const eventsForNotification = (eventIds, page = 1) => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getEvents(eventIds, page);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getEvents(jsonRes));
    return Promise.resolve();
  };
};

export default eventsForNotification;
