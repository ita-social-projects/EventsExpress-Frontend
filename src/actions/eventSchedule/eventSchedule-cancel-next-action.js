import { createBrowserHistory } from "history";
import { EventScheduleService } from "../../services";
import { setSuccessAllert, setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const apiService = new EventScheduleService();
const history = createBrowserHistory({ forceRefresh: true });

const cancelNextEventSchedule = eventId => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setNextEventScheduleCancel(eventId);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    dispatch(setSuccessAllert("The next event has been canceled!"));
    history.push(`/eventSchedules`);
    return Promise.resolve();
  };
};

export default cancelNextEventSchedule;
