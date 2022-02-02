import { ConfigService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_CONFIG_DATA = "GET_CONFIG_DATA";

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
