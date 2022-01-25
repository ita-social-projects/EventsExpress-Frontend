import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const editBirthday = {
  UPDATE: "UPDATE_BIRTHDAY",
};

const API_SERV = new UserService();

export default function edit_Birthday(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.setBirthday(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateBirthday(data.birthday));
    dispatch(setSuccessAllert("Date of birth is successfully set"));
    return Promise.resolve();
  };
}

function updateBirthday(data) {
  return {
    type: editBirthday.UPDATE,
    payload: data,
  };
}
