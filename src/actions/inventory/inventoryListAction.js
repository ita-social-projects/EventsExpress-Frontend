import { InventoryService } from "../../services";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { GET_INVENTORY_DATA } from "./inventoryActionTypes";

const apiService = new InventoryService();

export function getInventoryData(data) {
  return {
    type: GET_INVENTORY_DATA,
    payload: data,
  };
}

export function getInventoriesByEventId(eventId) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getInventoriesByEventId(eventId);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getInventoryData(jsonRes));
    return Promise.resolve();
  };
}
