import DEBOUNCE_DELAYS from "../constants/debounceDelaysConstants";

const debounce = (callBackFunc, delay = DEBOUNCE_DELAYS.standartDelay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBackFunc(...args);
    }, delay);
  };
};
export default debounce;
