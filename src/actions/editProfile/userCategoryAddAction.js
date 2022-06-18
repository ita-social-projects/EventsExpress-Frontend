import { SubmissionError } from "redux-form";
import { UserService } from "../../services";
import { setSuccessAllert } from "../alert/alertAction";
import { buildValidationState } from "../../helpers/actionHelpers";

import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { addUserCategoryStates } from "./editProfileActionTypes";

const apiService = new UserService();

function updateCategories(data) {
  return {
    type: addUserCategoryStates.UPDATE,
    payload: data.categories,
  };
}

const setUserCategory = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.setUserCategory(data);
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(getRequestDec());
    dispatch(updateCategories(data));
    dispatch(setSuccessAllert("Favorite categories are updated"));
    return Promise.resolve();
  };
};

export default setUserCategory;
