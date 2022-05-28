const debounce = (callBackFunc, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBackFunc(...args);
    }, delay);
  };
};
export default debounce;
