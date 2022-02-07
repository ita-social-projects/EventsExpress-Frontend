import { createBrowserHistory } from "history";
import { EventService } from "../../services";
import { setErrorAllertFromResponse, setSuccessAllert } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const SET_EVENT_FROM_PARENT_SUCCESS = "SET_EVENT_FROM_PARENT_SUCCESS";
export const SET_EVENT_FROM_PARENT_PENDING = "SET_EVENT_FROM_PARENT_PENDING";

const apiService = new EventService();
const history = createBrowserHistory({ forceRefresh: true });

export function setEventFromParentSuccess(data) {
  return {
    type: SET_EVENT_FROM_PARENT_SUCCESS,
    payload: data,
  };
}

export function setEventFromParentPending(data) {
  return {
    type: SET_EVENT_FROM_PARENT_PENDING,
    payload: data,
  };
}

const editEventFromParent = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setEventFromParent(data);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getRequestDec());
    const jsonRes = await response.json();
    dispatch(setSuccessAllert("Your event has been successfully created!"));
    history.push(`/event/${jsonRes.id}/1`);
    return Promise.resolve();
  };
};

export default editEventFromParent;
