import { CategoryService } from "../../services";
import getCategories from "./categoryListAction";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";

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
