import { CategoryService } from "../../services";
import getCategories from "./category-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const apiService = new CategoryService();

const deleteCategory = data => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setCategoryDelete(data);
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    dispatch(getCategories());
    return Promise.resolve();
  };
};

export default deleteCategory;
