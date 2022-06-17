import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert/alertAction";
import { buildValidationState } from "../../components/helpers/action-helpers";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { addUserNotificationTypeStates } from "./editProfileActionTypes";

const apiService = new UserService();

function updateNotificationTypes(data) {
  return {
    type: addUserNotificationTypeStates.UPDATE,
    payload: data.notificationTypes,
  };
}

const setUserNotificationTypes = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setUserNotificationType(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateNotificationTypes(data));
    const textMessage = `Favorite notification type${
      data.notificationTypes.length > 1 ? "s have" : " has"
    } been updated`;
    dispatch(setSuccessAllert(textMessage));
    return Promise.resolve();
  };
};

export default setUserNotificationTypes;
