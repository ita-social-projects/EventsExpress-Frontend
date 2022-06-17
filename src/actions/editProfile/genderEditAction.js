﻿import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert/alertAction";
import { buildValidationState } from "../../components/helpers/action-helpers";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { editGenderStates } from "./editProfileActionTypes";

const apiService = new UserService();

function updateGender(data) {
  return {
    type: editGenderStates.UPDATE,
    payload: data,
  };
}

const editGender = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setGender(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateGender(data));
    dispatch(setSuccessAllert("Gender is successfully set"));
    return Promise.resolve();
  };
};

export default editGender;
