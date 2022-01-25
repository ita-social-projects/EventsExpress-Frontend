import filterHelper from "../../components/helpers/filterHelper";
import { AuthenticationService } from "../../services";
import { reset } from "../chat/chat-action";
import { resetNotification } from "../chat/chats-action";
import { updateEventsFilters } from "../event/event-list-action";

export const SET_LOGOUT = "SET_LOGOUT";

const API_SERV = new AuthenticationService();

export default function logout() {
  return async dispatch => {
    dispatch(updateEventsFilters(filterHelper.getDefaultEventFilter()));
    dispatch(reset());
    dispatch(setLogout());
    dispatch(resetNotification());
    localStorage.clear();
    return API_SERV.revokeToken();
  };
}

function setLogout() {
  return {
    type: SET_LOGOUT,
  };
}
