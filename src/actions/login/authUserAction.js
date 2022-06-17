import { AuthenticationService } from "../../services";
import { getUserInfo } from "./loginAction";

const apiService = new AuthenticationService();

export default () => {
  return dispatch => {
    if (!apiService.getCurrentToken()) return;

    dispatch(getUserInfo());
  };
};
