import { createBrowserHistory } from "history";
import { EventScheduleService } from "../../services";
import { setSuccessAllert, setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const apiService = new EventScheduleService();
const history = createBrowserHistory({ forceRefresh: true });

const cancelAllEventSchedules = eventId => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setEventSchedulesCancel(eventId);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    dispatch(setSuccessAllert("Your events have been canceled!"));
    history.push(`/eventSchedules`);
    return Promise.resolve();
  };
};

export default cancelAllEventSchedules;
