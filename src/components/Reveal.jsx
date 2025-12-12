// src/components/Reveal.jsx
import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", ...props }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
          setShow(true);
          obs.unobserve(entry.target);
      }
    });

    obs.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? "show" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Reveal;
