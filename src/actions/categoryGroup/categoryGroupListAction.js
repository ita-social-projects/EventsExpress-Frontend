import { CategoryGroupService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_CATEGORY_GROUPS_DATA } from "./categoryGroupActionTypes";

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
