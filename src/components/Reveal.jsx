// src/components/Reveal.jsx
import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", ...props }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        // vào viewport -> hiện
        if (entry.isIntersecting) {
          setShow(true);
        } 
        // ra khỏi viewport -> ẩn lại
        else {
          setShow(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
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
