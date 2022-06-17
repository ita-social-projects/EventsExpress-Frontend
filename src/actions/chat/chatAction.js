import * as SignalR from "@aspnet/signalr";
import { ChatService } from "../../services";
import { setErrorAllertFromResponse, setAlert } from "../alert/alertAction";
import { jwtStorageKey } from "../../constants/constants";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import {
  GET_CHAT_DATA,
  INITIAL_CONNECTION,
  RECEIVE_MESSAGE,
  RESET_CHAT,
  RECEIVE_SEEN_MESSAGE,
  CONCAT_NEW_MSG,
  DELETE_OLD_NOTIFICATION,
  DELETE_SEEN_MSG_NOTIFICATION,
  RECEIVED_NEW_EVENT,
} from "./chatActionTypes";

const apiService = new ChatService();

function receivedNewEvent(data) {
  return {
    type: RECEIVED_NEW_EVENT,
    payload: data,
  };
}

export function deleteSeenMsgNotification(id) {
  return dispatch =>
    dispatch({
      type: DELETE_SEEN_MSG_NOTIFICATION,
      payload: id,
    });
}
export function deleteOldNotififcation(data) {
  return dispatch =>
    dispatch({
      type: DELETE_OLD_NOTIFICATION,
      payload: data,
    });
}
export function concatNewMsg(data) {
  return dispatch =>
    dispatch({
      type: CONCAT_NEW_MSG,
      payload: data,
    });
}

export function ReceiveSeenMsg(data) {
  return {
    type: RECEIVE_SEEN_MESSAGE,
    payload: data,
  };
}

export function ReceiveMsg(data) {
  return {
    type: RECEIVE_MESSAGE,
    payload: data,
  };
}

export function reset() {
  return {
    type: RESET_CHAT,
    payload: {},
  };
}

export function getChatSuccess(data) {
  return {
    type: GET_CHAT_DATA,
    payload: data,
  };
}

export function initialConnection() {
  return async dispatch => {
    const hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl(`${window.location.origin}/chatroom`, {
        accessTokenFactory: () => localStorage.getItem(jwtStorageKey),
      })
      .build();
    try {
      await hubConnection.start();

      hubConnection.on("ReceiveMessage", data => {
        dispatch(ReceiveMsg(data));
        if (data.senderId !== localStorage.getItem("id")) {
          dispatch(
            setAlert({
              variant: "info",
              message: "You have a new message",
              autoHideDuration: 5000,
            }),
          );
        }
      });
      hubConnection.on("wasSeen", data => {
        dispatch(ReceiveSeenMsg(data));
      });

      hubConnection.on("ReceivedNewEvent", data => {
        dispatch(receivedNewEvent(data));
        dispatch(
          setAlert({
            variant: "info",
            message: `The event was created which could interested you.`,
            autoHideDuration: 5000,
          }),
        );
      });
    } catch (err) {
      // TODO in the future need to create normal error handling
      // eslint-disable-next-line no-console
      console.log("Error while establishing connection :(");
    }

    dispatch({
      type: INITIAL_CONNECTION,
      payload: hubConnection,
    });
  };
}

const getChat = chatId => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getChat(chatId);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getChatSuccess(jsonRes));
    return Promise.resolve();
  };
};

export default getChat;
