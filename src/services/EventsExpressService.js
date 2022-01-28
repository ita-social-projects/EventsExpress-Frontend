import { jwtStorageKey } from "../constants/constants";

export default class EventsExpressService {
  baseUrl = "api/";

  getResource = async Url => {
    const call = url =>
      fetch(this.baseUrl + url, {
        method: "get",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(jwtStorageKey)}`,
        }),
      });

    let res = await call(Url);
    if (res.status === 401 && (await this.refreshHandler())) {
      // one more try:
      res = await call(Url);
    }
    return res;
  };

  getPhoto = async Url => {
    const call = url => fetch(this.baseUrl + Url);
    const res = await call(Url);

    if (res.ok) {
      return res.blob();
    }
    return null;
  };

  setResource = async (Url, data) => {
    const call = (Url, data) =>
      fetch(this.baseUrl + Url, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(jwtStorageKey)}`,
        }),
        body: JSON.stringify(data),
      });

    let res = await call(Url, data);

    if (res.status === 401 && (await this.refreshHandler())) {
      // one more try:
      res = await call(Url, data);
    }

    return res;
  };

  setResourceWithData = async (Url, data) => {
    const call = (Url, data) =>
      fetch(this.baseUrl + Url, {
        method: "post",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem(jwtStorageKey)}`,
        }),
        body: data,
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
