import { ContactAdminService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import {
  GET_CONTACT_ADMIN_DATA,
  RESET_CONTACT_ADMIN,
} from "./contactAdminActionTypes";

const apiService = new ContactAdminService();

export function getListOfIssues(data) {
  return {
    type: GET_CONTACT_ADMIN_DATA,
    payload: data,
  };
}

export function resetFilters() {
  return {
    type: RESET_CONTACT_ADMIN,
  };
}

const getIssues = filters => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getAllIssues(filters);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getListOfIssues(jsonRes));
    return Promise.resolve();
  };
};

export default getIssues;
