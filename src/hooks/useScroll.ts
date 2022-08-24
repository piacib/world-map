import React, { useState } from "react";
// const scale = 1;
// const panning = false;
// const pointX = 0;
// const pointY = 0;
// const start = { x: 0, y: 0 };
// const zoom = document.getElementById("zoom");
// interface Props {
//   scale: any;
//   panning: any;
//   pointX: any;
//   pointY: any;
//   start: any;
//   zoom: any;
// }

// const zoomOnMouse = ({
//   zoom,
//   scale = 1,
//   panning = false,
//   pointX = 0,
//   pointY = 0,
//   start = { x: 0, y: 0 },
// }: Props) => {
//   function setTransform(pointX: number, pointY: number, scale: number) {
//     return "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
//   }

//   const onmousedown = function (e: React.MouseEvent) {
//     e.preventDefault();
//     start = { x: e.clientX - pointX, y: e.clientY - pointY };
//     panning = true;
//   };

//   const onmouseup = function (e: React.MouseEvent) {
//     panning = false;
//   };

//   const onmousemove = function (e: React.MouseEvent) {
//     e.preventDefault();
//     if (!panning) {
//       return;
//     }
//     pointX = e.clientX - start.x;
//     pointY = e.clientY - start.y;
//   };

//   const onwheel = function (e: React.WheelEvent) {
//     e.preventDefault();
//     var xs = (e.clientX - pointX) / scale,
//       ys = (e.clientY - pointY) / scale,
//       delta = -e.deltaY;
//     delta > 0 ? (scale *= 1.2) : (scale /= 1.2);
//     pointX = e.clientX - xs * scale;
//     pointY = e.clientY - ys * scale;
//   };

//   return {
//     onmousedown,
//     onmouseup,
//     onmousemove,
//     onwheel,
//     transform: setTransform(pointX, pointY, scale),
//   };
// };
// function setTransform(pointX: number, pointY: number, scale: number) {
//   return "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
// }
// let scale = 1
// const zoomOnMouse = function (e: React.WheelEvent) {
//   let pointX: number = e.clientX - coords.x;
//   let pointY: number = e.clientY - coords.y;
//   let xs = (e.clientX - pointX) / scale;
//   let ys = (e.clientY - pointY) / scale;
//   let delta = -e.deltaY;
//   delta > 0 ? (scale *= 1.2) : (scale /= 1.2);
//   pointX = e.clientX - xs * scale;
//   pointY = e.clientY - ys * scale;
//   return [pointX, pointY]; //setTransform(pointX, pointY, scale);
// };

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
  };
  return [[zoom, setZoom], onWheel];
};

export default useScroll;
