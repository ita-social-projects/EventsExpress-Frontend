import { stringify as queryStringStringify } from "query-string";

export const isObject = object => object !== null && typeof object === "object";

export const compareObjects = (objFirst, objSecond) => {
  const keysObjectFirst = Object.keys(objFirst);
  const keysObjectSecond = Object.keys(objSecond);

  if (keysObjectFirst.length !== keysObjectSecond.length) {
    return false;
  }
  //! TODO: iterators/generators require regenerator-runtime...
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keysObjectFirst) {
    const valObjectFirst = objFirst[key];
    const valObjectSecond = objSecond[key];
    const areObjects =
      this.isObject(valObjectFirst) && this.isObject(valObjectSecond);
    if (
      (areObjects && !this.compareObjects(valObjectFirst, valObjectSecond)) ||
      (!areObjects && valObjectFirst !== valObjectSecond)
    ) {
      return false;
    }
  }

  return true;
};

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
