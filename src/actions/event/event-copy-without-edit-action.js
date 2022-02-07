import { createBrowserHistory } from "history";
import { EventService } from "../../services";
import { setErrorAllertFromResponse, setSuccessAllert } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const apiService = new EventService();
const history = createBrowserHistory({ forceRefresh: true });

const addCopyEvent = eventId => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setCopyEvent(eventId);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(setSuccessAllert("Your event has been successfully created!"));
    history.push(`/event/${jsonRes.id}/1`);
    return Promise.resolve();
  };
};

export default addCopyEvent;
