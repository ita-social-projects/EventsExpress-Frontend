import { useEffect, useState } from "react";

const useDelay = (delayedAction, initialValue, timeout = 1000) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      delayedAction(value);
    }, timeout);
    return () => clearTimeout(timeoutId);
    //! TODO: ADD CORECT DEPENDENCY IN THE useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};

export default useDelay;
