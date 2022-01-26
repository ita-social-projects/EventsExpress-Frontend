import NotificationTemplateService from "../services/NotificationTemplateService";
import { setErrorAllertFromResponse } from "./alert-action";

export const GET_TEMPLATES_SUCCESS = "GET_TEMPLATES_SUCCESS";
export const GET_TEMPLATE_SUCCESS = "GET_TEMPLATE_SUCCESS";
export const GET_TEMPLATE_PROPERTIES_SUCCESS =
  "GET_TEMPLATE_PROPERTIES_SUCCESS";

const API_SERV = new NotificationTemplateService();

function getTemplatesData(data) {
  return {
    type: GET_TEMPLATES_SUCCESS,
    payload: data,
  };
}

function getTemplateData(data) {
  return {
    type: GET_TEMPLATE_SUCCESS,
    payload: data,
  };
}

function getPropertiesData(data) {
  return {
    type: GET_TEMPLATE_PROPERTIES_SUCCESS,
    payload: data,
  };
}

export function getAllTemplates() {
  return async dispatch => {
    const response = await API_SERV.getAll();

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(getTemplatesData(jsonRes));

    return Promise.resolve();
  };
}

export function getTemplate(id) {
  return async dispatch => {
    const response = await API_SERV.getByIdAsync(id);

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(getTemplateData(jsonRes));

    return Promise.resolve();
  };
}

export function getTemplateProperties(templateId) {
  return async dispatch => {
    const response = await API_SERV.getProperties(templateId);

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    const jsonRes = await response.json();
    dispatch(getPropertiesData(jsonRes));

    return Promise.resolve();
  };
}

export function updateTemplate(template) {
  return async dispatch => {
    const response = await API_SERV.updateAsync(template);

    if (!response.ok) {
      dispatch(setErrorAllertFromResponse(response));
      return Promise.reject();
    }

    return Promise.resolve();
  };
}
