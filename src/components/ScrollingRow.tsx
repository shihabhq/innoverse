"use client";
import { useState } from "react";

const additionalSupporters = [
  "home/supporters/abc.svg",
  "home/supporters/xyz.svg",
  "home/supporters/jamuna.svg",
  "home/supporters/desh.png",
  "home/supporters/bbc.svg",
  "home/supporters/trt.png",
  "home/supporters/aljazeera.png",
  "home/supporters/tbs.svg",
  "home/supporters/manob.svg",
  "home/supporters/somokal.svg",
  "home/supporters/dhakatribune.png",
  "home/supporters/daily-campus.svg",
];

const ScrollingRow = ({
  direction = "left",
}: {
  direction?: "left" | "right";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationName = direction === "left" ? "scroll-left" : "scroll-right";

  const animationStyle = {
    animation: `${animationName} 30s linear infinite`,
    animationPlayState: isHovered ? "paused" : "running",
  } as React.CSSProperties;

  return (
    <div className="overflow-hidden mt-20 whitespace-nowrap">
      <div
        className="inline-flex"
        style={animationStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {additionalSupporters.map((logo, index) => (
          <div
            key={index}
            className=" p-8 flex items-center justify-center w-[200px]"
          >
            <img src={logo} className="bg-primary-background w-28" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingRow;
