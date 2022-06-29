/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
// eslint-disable-next-line import/no-unused-modules
global.matchMedia =
  global.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
