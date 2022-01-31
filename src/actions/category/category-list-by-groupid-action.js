import { CategoryService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_CATEGORIES_BY_GROUP_ID = "GET_CATEGORIES_BY_GROUP_ID";

const apiService = new CategoryService();

export function getCategoriesByGroupIdData(data) {
  return {
    type: GET_CATEGORIES_BY_GROUP_ID,
    payload: data,
  };
}

const getCategoriesByGroupId = id => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getCategoriesByGroup(id);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getCategoriesByGroupId(jsonRes));
    return Promise.resolve();
  };
};

export default getCategoriesByGroupId;
