import { jwtStorageKey } from "../constants/constants";

export default class EventsExpressService {
  baseUrl = "api/";

  getResource = async url => {
    const call = callUrl =>
      fetch(this.baseUrl + callUrl, {
        method: "get",
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${localStorage.getItem(jwtStorageKey)}`,
        }),
      });

    let res = await call(url);
    if (res.status === 401 && (await this.refreshHandler())) {
      // one more try:
      res = await call(url);
    }
    return res;
  };

  getPhoto = async url => {
    const call = callUrl => fetch(this.baseUrl + callUrl);
    const res = await call(url);

    if (res.ok) {
      return res.blob();
    }
    return null;
  };

  setResource = async (Url, data) => {
    const call = (callurl, callData) =>
      fetch(this.baseUrl + callurl, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          Authorization: `Bearer ${localStorage.getItem(jwtStorageKey)}`,
        }),
        body: JSON.stringify(callData),
      });

    let res = await call(Url, data);

    if (res.status === 401 && (await this.refreshHandler())) {
      // one more try:
      res = await call(Url, data);
    }

    return res;
  };

  setResourceWithData = async (Url, data) => {
    const call = (newUrl, newData) =>
      fetch(this.baseUrl + newUrl, {
        method: "post",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem(jwtStorageKey)}`,
        }),
        body: newData,
      });

    let res = await call(Url, data);

    if (res.status === 401 && (await this.refreshHandler())) {
      // one more try:
      res = await call(Url, data);
    }

    return res;
  };

  refreshHandler = async () => {
    localStorage.removeItem(jwtStorageKey);
    const response = await fetch("api/token/refresh-token", {
      method: "POST",
    });

    if (!response.ok) {
      return false;
    }

    const rest = await response.json();
    localStorage.setItem(jwtStorageKey, rest.jwtToken);

    return true;
  };

  setWantToTake = data =>
    this.setResource(`UserEventInventory/MarkItemAsTakenByUser`, data);

  getUsersInventories = eventId =>
    this.getResource(
      `UserEventInventory/GetAllMarkItemsByEventId/?eventId=${eventId}`,
    );
}
