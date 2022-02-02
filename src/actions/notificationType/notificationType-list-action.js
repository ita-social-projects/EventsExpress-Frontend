import NotificationTypeService from "../../services/NotificationTypeService";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_NOTIFICATION_TYPES_DATA = "GET_NOTIFICATION_TYPES_DATA";
export const GET_USER_NOTIFICATION_TYPES_DATA =
  "GET_USER_NOTIFICATION_TYPES_DATA";

const apiService = new NotificationTypeService();

function getNotificationTypesData(data) {
  return {
    type: GET_NOTIFICATION_TYPES_DATA,
    payload: data,
  };
}

const getNotificationTypes = () => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getAllNotificationTypes();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getNotificationTypesData(jsonRes));
    return Promise.resolve();
  };
};

export default getNotificationTypes;
