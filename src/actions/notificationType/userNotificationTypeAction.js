import NotificationTypeService from "../../services/NotificationTypeService";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_USER_NOTIFICATION_TYPES_DATA } from "./notificationActionTypes";

const apiService = new NotificationTypeService();

function getUserNotificationTypesData(data) {
  return {
    type: GET_USER_NOTIFICATION_TYPES_DATA,
    payload: data,
  };
}

const getUserNotificationTypes = () => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getUserNotificationTypes();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getUserNotificationTypesData(jsonRes));
    return Promise.resolve();
  };
};

export default getUserNotificationTypes;
