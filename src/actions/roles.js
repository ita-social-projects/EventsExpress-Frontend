import { RoleService } from "../services";
import { setErrorAllertFromResponse } from "./alert-action";
import { getRequestInc, getRequestDec } from "./request-count-action";

export const getRoles = {
  DATA: "ROLES_SUCCESS",
};

const API_SERV = new RoleService();

export default function get_roles() {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await API_SERV.getRoles();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(setRolesSuccess(jsonRes));
    return Promise.resolve();
  };
}

function setRolesSuccess(data) {
  return {
    type: getRoles.DATA,
    payload: data,
  };
}
