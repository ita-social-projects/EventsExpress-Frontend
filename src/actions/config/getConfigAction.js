import { ConfigService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_CONFIG_DATA } from "./configActionTypes";

const apiService = new ConfigService();

export function getConfigSuccess(data) {
  return {
    type: GET_CONFIG_DATA,
    payload: data,
  };
}

const getConfig = () => {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getConfigFromBack();
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const config = await response.json();
    dispatch(getConfigSuccess(config));

    return Promise.resolve();
  };
};

export default getConfig;
