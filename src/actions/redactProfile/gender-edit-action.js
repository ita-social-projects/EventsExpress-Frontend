import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert-action";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const editGender = {
  UPDATE: "UPDATE_GENDER",
};

const API_SERV = new UserService();

export default function edit_Gender(data) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.setGender(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateGender(data));
    dispatch(setSuccessAllert("Gender is successfully set"));
    return Promise.resolve();
  };
}

function updateGender(data) {
  return {
    type: editGender.UPDATE,
    payload: data,
  };
}
