import { CategoryGroupService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_CATEGORY_GROUPS_DATA = "GET_CATEGORY_GROUPS_DATA";

const apiService = new CategoryGroupService();

function getCategoryGroupsData(data) {
  return {
    type: GET_CATEGORY_GROUPS_DATA,
    payload: data,
  };
}

const getCategoryGroups = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getAllCategoryGroups();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getCategoryGroupsData(jsonRes));
    return Promise.resolve();
  };
};

export default getCategoryGroups;
