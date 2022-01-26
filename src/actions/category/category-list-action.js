import { CategoryService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_CATEGORIES_DATA = "GET_CATEGORIES_DATA";

const apiServ = new CategoryService();

export function getCategory(data) {
  return {
    type: GET_CATEGORIES_DATA,
    payload: data,
  };
}

export default function getCategories() {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiServ.getAllCategories();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getCategory(jsonRes));
    return Promise.resolve();
  };
}
