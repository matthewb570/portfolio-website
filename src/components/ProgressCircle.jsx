import "../styles/ProgressCircle.css";
import { useState, useEffect, useRef } from "react";

const INTERSECTION_OBSERVER_THRESHOLD = 0.1;

export default function ProgressCircle({ percent }) {
  const [isInView, setIsInView] = useState(false);

  const divProgressCircle = useRef(null);

  const degreesFilled = 360 * percent;

  useEffect(() => {
    const divProgressCircleCurrent = divProgressCircle.current;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: INTERSECTION_OBSERVER_THRESHOLD,
    };

    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(divProgressCircleCurrent);

    return () => {
      observer.unobserve(divProgressCircleCurrent);
    };
  }, [divProgressCircle]);

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > INTERSECTION_OBSERVER_THRESHOLD) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  }

  return (
    <div className="progress-circle" ref={divProgressCircle}>
      <div
        className="outer-ring "
        style={{ "--degrees-filled": `${!isInView ? 0 : degreesFilled}deg` }}
      ></div>
      <div className="inner-circle"></div>
    </div>
  );
}
