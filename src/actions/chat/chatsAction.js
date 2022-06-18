import { ChatService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import {
  GET_CHATS_DATA,
  GET_UNREAD_MESSAGES,
  RESET_NOTIFICATION,
} from "./chatActionTypes";

const apiService = new ChatService();

export function resetNotification() {
  return dispatch => dispatch({ type: RESET_NOTIFICATION });
}

export function getUnreadMessages(userId) {
  // eslint-disable-next-line consistent-return
  return async dispatch => {
    const response = await apiService.getUnreadMessages(userId);
    if (response.ok) {
      const jsonRes = await response.json();
      dispatch({ type: GET_UNREAD_MESSAGES, payload: jsonRes });
      return Promise.resolve();
    }
  };
}

export function getChatsSuccess(data) {
  return {
    type: GET_CHATS_DATA,
    payload: data,
  };
}

const getChats = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getChats();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getChatsSuccess(jsonRes));
    return Promise.resolve();
  };
};

export default getChats;
