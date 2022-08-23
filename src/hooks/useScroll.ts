import React, { useState } from "react";

const useScroll = (
  initialZoom: number = 1,
  zoomFactor: number = 0.5
): [
  [number, React.Dispatch<React.SetStateAction<number>>],
  (e: React.WheelEvent) => void
] => {
  const [zoom, setZoom] = useState<number>(1);
  const onWheel = (e: React.WheelEvent) => {
    const scrollUp = e.deltaY < 0;
    if (scrollUp) {
      setZoom(zoom + zoomFactor);
    } else {
      if (zoom > 1) setZoom(zoom - zoomFactor);
    }
    console.log("scrolling", scrollUp);
  };
  return [[zoom, setZoom], onWheel];
};

export default useScroll;
