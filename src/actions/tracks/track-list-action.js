import { TrackService } from "../../services";
import { setErrorAllertFromResponse } from "../alert-action";
import { getRequestInc, getRequestDec } from "../request-count-action";

export const GET_TRACKS_DATA = "GET_TRACKS_DATA";
export const GET_ENTITY_NAMES = "GET_ENTITY_NAMES";
export const RESET_TRACKS = "RESET_TRACKS";

const apiService = new TrackService();

function getNames(names) {
  return { type: GET_ENTITY_NAMES, payload: names };
}

function getTracks(data) {
  return { type: GET_TRACKS_DATA, payload: data };
}

export function resetTracks() {
  return {
    type: RESET_TRACKS,
  };
}

export default function getAllTracks(filter) {
  return async dispatch => {
    dispatch(getRequestInc());
    const response = await apiService.getAll(filter);
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getRequestDec());
    dispatch(getTracks(jsonRes));
    return Promise.resolve();
  };
}

export function getEntityNames() {
  return async dispatch => {
    const response = await apiService.getEntityNames();
    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }
    const jsonRes = await response.json();
    dispatch(getNames(jsonRes));
    return Promise.resolve();
  };
}
