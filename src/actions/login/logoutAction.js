import filterHelper from "../../helpers/filterHelper";
import { AuthenticationService } from "../../services";
import { reset } from "../chat/chatAction";
import { resetNotification } from "../chat/chatsAction";
import { updateEventsFilters } from "../event/eventListAction";
import { SET_LOGOUT } from "./loginActionTypes";

const apiService = new AuthenticationService();

function setLogout() {
  return {
    type: SET_LOGOUT,
  };
}

const logout = () => {
  return async dispatch => {
    dispatch(updateEventsFilters(filterHelper.getDefaultEventFilter()));
    dispatch(reset());
    dispatch(setLogout());
    dispatch(resetNotification());
    localStorage.clear();
    return apiService.revokeToken();
  };
};
export default logout;
