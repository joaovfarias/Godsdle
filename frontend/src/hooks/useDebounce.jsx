import { useState, useEffect } from "react";

const useDebounce = (string, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(string);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(string);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [string, delay]);

  return debouncedValue;
};

export default useDebounce;
