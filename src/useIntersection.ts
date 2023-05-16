import { useState, useEffect, MutableRefObject } from "react";

const useIntersection = (
  target?: MutableRefObject<HTMLDivElement | null>,
  root?: Element | Document | null
) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (!target || !target.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setState(entry.isIntersecting);
        }
      },
      {
        root,
      }
    );

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return [state];
};

export default useIntersection;
