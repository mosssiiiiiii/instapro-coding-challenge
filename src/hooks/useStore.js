import { useState } from "react";

const useStore = (key, initialValue) => {
  const [columns, setColumns] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = JSON.parse(window.localStorage.getItem(key));
      if (item) {
        return item;
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue || [];
      }
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(columns) : value;
      setColumns(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (e) {}
  };

  return [columns, setValue];
};

export default useStore;
