import _uniqueId from "lodash/uniqueId";
import { useState } from "react";

const initialValue = [
  { name: "Doing", id: _uniqueId("clm-"), cards: [] },
  { name: "Done", id: _uniqueId("clm-"), cards: [] },
];

const useStore = (key) => {
  const [columns, setColumns] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = JSON.parse(window.localStorage.getItem(key));
      console.log(item);
      if (item) {
        return item;
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
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
