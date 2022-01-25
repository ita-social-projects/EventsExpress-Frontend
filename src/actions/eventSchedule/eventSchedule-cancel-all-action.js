import { createBrowserHistory } from "history";
import { EventScheduleService } from "../../services";
import { setSuccessAllert, setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const api_serv = new EventScheduleService();
const history = createBrowserHistory({ forceRefresh: true });

export default function (eventId) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await api_serv.setEventSchedulesCancel(eventId);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    dispatch(setSuccessAllert("Your events have been canceled!"));
    dispatch(history.push(`/eventSchedules`));
    return Promise.resolve();
  };
}
