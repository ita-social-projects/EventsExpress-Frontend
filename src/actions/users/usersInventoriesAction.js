import { SubmissionError } from "redux-form";
import InventoryService from "../../services/InventoryService";
import { getInventoriesByEventId } from "../inventory/inventoryListAction";
import { setErrorAllertFromResponse } from "../alert/alertAction";
import {
  getRequestInc,
  getRequestDec,
} from "../requestCount/requestCountAction";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { GET_USERSINVENTORIES_DATA } from "./usersActionTypes";

const apiService = new InventoryService();

export function getUsersInventoriesSuccess(data) {
  return {
    type: GET_USERSINVENTORIES_DATA,
    payload: data,
  };
}

export function getUsersInventoriesByEventId(eventId) {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.getUsersInventories(eventId);
    dispatch(getInventoriesByEventId(eventId));
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getUsersInventoriesSuccess(jsonRes));
    return Promise.resolve();
  };
}

export function deleteUsersInventory(data) {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setUsersInventoryDelete(data);
    dispatch(getInventoriesByEventId(data.eventId));
    dispatch(getRequestDec());
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    return Promise.resolve();
  };
}

export function editUsersInventory(data) {
  return async dispatch => {
    dispatch(getRequestInc());

    const response = await apiService.setUsersInventory(data);
    dispatch(getInventoriesByEventId(data.eventId));
    if (!response.ok) {
      throw new SubmissionError(await buildValidationState(response));
    }
    const jsonRes = await response.json();
    dispatch(getUsersInventoriesSuccess(jsonRes));
    dispatch(getRequestDec());
    return Promise.resolve();
  };
}
