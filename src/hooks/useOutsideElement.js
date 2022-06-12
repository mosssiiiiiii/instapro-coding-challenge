import { useEffect, useCallback } from "react";

function useOutsideElement(ref, callback) {
  const memoizedHandleOutsideClick = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) callback();
    },
    [ref, callback]
  );
  useEffect(() => {
    document.addEventListener("mousedown", memoizedHandleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", memoizedHandleOutsideClick);
    };
  }, [memoizedHandleOutsideClick]);
}

export { useOutsideElement };
