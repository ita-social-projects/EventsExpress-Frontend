import { ContactAdminService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_CONTACT_ADMIN_DATA } from "./contactAdminActionTypes";

const apiService = new ContactAdminService();

function getMessageByIdData(data) {
  return {
    type: GET_CONTACT_ADMIN_DATA,
    payload: data,
  };
}

const getMessageById = id => {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getMessage(id);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getMessageByIdData(jsonRes));
    return Promise.resolve();
  };
};

export default getMessageById;
