import { RefObject, useEffect } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        const target = event.target as HTMLElement;
        if (!ref.current || ref.current.contains(target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener, true);
      document.addEventListener("touchstart", listener, true);
      return () => {
        document.removeEventListener("mousedown", listener, true);
        document.removeEventListener("touchstart", listener, true);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
