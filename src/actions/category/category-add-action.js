import { SubmissionError } from "redux-form";
import { CategoryService } from "../../services";
import getCategories from "./category-list-action";
import { getRequestInc, getRequestDec } from "../request-count-action";
import { buildValidationState } from "../../components/helpers/action-helpers";

export const SET_CATEGORY_EDITED = "SET_CATEGORY_EDITED";

const apiService = new CategoryService();

export function setCategoryEdited(data) {
  return {
    type: SET_CATEGORY_EDITED,
    payload: data,
  };
}

const addCategory = data => {
  return async dispatch => {
    dispatch(getRequestInc());
    let response;
    if (data.id) {
      response = await apiService.editCategory(data);
    } else {
      response = await apiService.setCategory(data);
    }
    dispatch(getRequestDec());
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    dispatch(setCategoryEdited(null));
    dispatch(getCategories());
    return Promise.resolve();
  };
};

export default addCategory;
