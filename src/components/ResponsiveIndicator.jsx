import React, { useEffect, useState } from "react";

const getBreakpoint = (width) => {
  if (width < 640) return "sm";
  if (width < 768) return "md";
  if (width < 1024) return "lg";
  if (width < 1280) return "xl";
  if (width < 1536) return "2xl";
  return "3xl";
};

export const ResponsiveIndicator = () => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed bottom-4 left-4 z-50 px-4 bg-white/10 py-2 text-sm font-semibold dark:text-white text-black
     dark:bg-black backdrop-blur-md rounded-xl shadow-md border border-white/20"
    >
      Screen: <span className="uppercase">{breakpoint}</span>
    </div>
  );
};

export default ResponsiveIndicator;
