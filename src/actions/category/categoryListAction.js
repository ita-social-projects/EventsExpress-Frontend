import { CategoryService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_CATEGORIES_DATA } from "./categoryActionTypes";

const apiService = new CategoryService();

function getCategoriesData(data) {
  return {
    type: GET_CATEGORIES_DATA,
    payload: data,
  };
}

const getСategoriesList = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getAllCategories();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getCategoriesData(jsonRes));
    return Promise.resolve();
  };
};

export default getСategoriesList;
