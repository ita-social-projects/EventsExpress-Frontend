import { CategoryService } from "../../services";
import getCategories from "./category-list-action";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

const API_SERV = new CategoryService();

const deleteCategory = data => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await API_SERV.setCategoryDelete(data);
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
