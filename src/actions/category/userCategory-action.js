import { CategoryService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_USER_CATEGORIES_DATA = "GET_USER_CATEGORIES_DATA";

const apiService = new CategoryService();

export function getUserCategoriesData(data) {
  return {
    type: GET_USER_CATEGORIES_DATA,
    payload: data,
  };
}

const getUserCategories = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getUserCategories();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getUserCategoriesData(jsonRes));
    return Promise.resolve();
  };
};

export default getUserCategories;
