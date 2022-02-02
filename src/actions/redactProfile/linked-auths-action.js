import { AccountService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";

export const GET_LINKED_AUTHS_SUCCESS = "GET_LINKED_AUTHS_SUCCESS";

const apiService = new AccountService();

export function pushToStateLinkedAuths(data) {
  return {
    type: GET_LINKED_AUTHS_SUCCESS,
    payload: data,
  };
}

const getLinkedAuths = () => {
  return async dispatch => {
    const response = await apiService.getLinkedAuths();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(pushToStateLinkedAuths(jsonRes));
    return Promise.resolve();
  };
};

export default getLinkedAuths;
