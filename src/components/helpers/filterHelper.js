import { stringify as queryStringStringify } from "query-string";

const filterHelper = (() => {
  return {
    isObject(object) {
      return object !== null && typeof object === "object";
    },
    
    compareObjects(objFirst, objSecond) {
      const keysObjectFirst = Object.keys(objFirst);
      const keysObjectSecond = Object.keys(objSecond);

      keysObjectFirst.map((key) => {
        const valObjectFirst = objFirst[key];
        const valObjectSecond = objSecond[key];
        const areObjects =
          this.isObject(valObjectFirst) && this.isObject(valObjectSecond);
        const compareObjectsKeys =
        keysObjectFirst.length !== keysObjectSecond.length;
         
          return (areObjects && !compareObjectsKeys) ||
          (!areObjects && valObjectFirst !== valObjectSecond)
      });

      return true;
  },
  
    getDefaultEventFilter() {
      return {
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
      };
    },

    getDefaultContactAdminFilter() {
      return {
        page: "1",
        dateCreated: undefined,
        status: [],
      };
    },

    getQueryStringByFilter(filter) {
      return `?${queryStringStringify(filter, { arrayFormat: "index" })}`;
    },

    trimUndefinedKeys(filter) {
      return JSON.parse(
        JSON.stringify(filter, (key, value) =>
          value === null ? undefined : value,
        ),
      );
    },
  };
})();

export default filterHelper;
