import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const editBirthdayStates = {
  UPDATE: "UPDATE_BIRTHDAY",
};

const apiService = new UserService();

function updateBirthday(data) {
  return {
    type: editBirthdayStates.UPDATE,
    payload: data,
  };
}

const editBirthday = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setBirthday(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateBirthday(data.birthday));
    dispatch(setSuccessAllert("Date of birth is successfully set"));
    return Promise.resolve();
  };
};
export default editBirthday;
