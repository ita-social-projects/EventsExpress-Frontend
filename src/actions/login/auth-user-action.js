import { AuthenticationService } from "../../services";
import { getUserInfo } from "./login-action";

const API_SERV = new AuthenticationService();

export default () => {
  return dispatch => {
    if (!API_SERV.getCurrentToken()) return;

    dispatch(getUserInfo());
  };
};
