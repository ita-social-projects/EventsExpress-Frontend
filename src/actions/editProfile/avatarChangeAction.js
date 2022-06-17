import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert/alertAction";
import { buildValidationState } from "../../components/helpers/action-helpers";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { changeAvatarStates } from "./editProfileActionTypes";

const apiService = new UserService();

export function updateAvatar() {
  return {
    type: changeAvatarStates.UPDATE,
  };
}

const changeAvatar = data => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setAvatar(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateAvatar());
    dispatch(setSuccessAllert("Avatar is successfully updated"));
    return Promise.resolve();
  };
};

export default changeAvatar;
