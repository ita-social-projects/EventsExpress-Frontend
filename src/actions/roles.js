import { RoleService } from "../services";
import { setErrorAllertFromResponse } from "./alert-action";
import { getRequestInc, getRequestDec } from "./request-count-action";

// TODO: REFACTOR IMPORT IN \src\reducers\roles.js
export const getRolesData = {
  DATA: "ROLES_SUCCESS",
};

const API_SERV = new RoleService();

function setRolesSuccess(data) {
  return {
    type: getRolesData.DATA,
    payload: data,
  };
}

const getRoles = () => {
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
};

export default getRoles;
