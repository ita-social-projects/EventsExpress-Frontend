import { stringify as queryStringStringify } from "query-string";
import { isEqual } from "lodash";

export const isObject = object => object !== null && typeof object === "object";

export const compareObjects = (obj1, obj2) => isEqual(obj1, obj2);

export const getQueryStringByFilter = filter =>
  `?${queryStringStringify(filter, { arrayFormat: "index" })}`;

// TODO : check eslint
export const trimUndefinedKeys = obj =>
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      // eslint-disable-next-line no-param-reassign
      delete obj[key];
    }
  });

export const getDefaultEventFilter = () => ({
  page: "1",
  keyWord: undefined,
  dateFrom: undefined,
  dateTo: undefined,
  categories: [],
  statuses: [],
  selectedPos: undefined,
  radius: 8,
  x: undefined,
  y: undefined,
});

export const getDefaultContactAdminFilter = () => ({
  page: "1",
  dateCreated: undefined,
  status: [],
});
