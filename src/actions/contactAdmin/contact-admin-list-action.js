import { ContactAdminService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_CONTACT_ADMIN_DATA = "GET_CONTACT_ADMIN_DATA";
export const RESET_CONTACT_ADMIN = "RESET_CONTACT_ADMIN";

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
