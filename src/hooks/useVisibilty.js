import { useEffect, useState } from "react";

const useVisibility = (divRef) => {
  const [visible, setVisible] = useState(false);

  const animateNow = (entries, observer) => {
    setVisible(entries[0].isIntersecting);
    if (entries[0].isIntersecting) observer.unobserve(entries[0].target);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(animateNow, options);

    const htmlDiv = divRef.current;
    if (htmlDiv) observer.observe(htmlDiv);

    return () => {
      if (htmlDiv) observer.unobserve(htmlDiv);
    };
  }, [divRef]);

  return visible;
};

export default useVisibility;
