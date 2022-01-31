import { AuthenticationService } from "../../services";
import { getUserInfo } from "./login-action";

const apiService = new AuthenticationService();

export default () => {
  return dispatch => {
    if (!apiService.getCurrentToken()) return;

    dispatch(getUserInfo());
  };
};
