import React, { useState } from "react";
type ZoomType = {
  scale: number;
  x: number;
  y: number;
};
const useScroll = (
  initialZoom: number = 1,
  zoomFactor: number = 0.5
): [
  [ZoomType, React.Dispatch<React.SetStateAction<ZoomType>>],
  (e: React.WheelEvent) => void
] => {
  const [zoom, setZoom] = useState<ZoomType>({
    scale: 1,
    x: 0,
    y: 0,
  });

  const onWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY * -0.01;
    const newScale = zoom.scale + delta;

    const ratio = 1 - newScale / zoom.scale;

    setZoom({
      scale: newScale,
      x: zoom.x + (e.clientX - zoom.x) * ratio,
      y: zoom.y + (e.clientY - zoom.y) * ratio,
    });
  };
  return [[zoom, setZoom], onWheel];
};

export default useScroll;
