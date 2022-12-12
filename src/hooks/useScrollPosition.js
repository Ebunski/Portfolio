import { useEffect, useRef, useState } from "react";

export default function useScroll(value) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    function scrollFn() {
      if (window.scrollY >= value) {
        setScrolledPast(true);

        return;
      }
      setScrolledPast(false);
    }
    if (hasMounted) {
      window.addEventListener("scroll", scrollFn, { passive: true });
    }
    hasMounted.current = true;

    return () =>
      window.removeEventListener("scroll", scrollFn, { passive: true });
  }, [value]);

  return scrolledPast;
}
