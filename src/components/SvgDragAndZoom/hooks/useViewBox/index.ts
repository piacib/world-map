import React, { useState } from "react";
import { ViewBox, StartPoint } from "./types";
interface Props {
  svgWidth: number;
  svgHeight: number;
  maxScale?: number;
  minScale?: number;
  scrollAdjustment?: number;
}
type Size = {
  w: number;
  h: number;
};
const useViewBox = ({
  svgWidth,
  svgHeight,
  maxScale,
  minScale,
  scrollAdjustment = 0.05,
}: Props): {
  viewBox: ViewBox;
  setViewBox: React.Dispatch<React.SetStateAction<ViewBox>>;
  onMouse: {
    Wheel: (e: React.WheelEvent) => void;
    Down: (e: React.MouseEvent) => void;
    Move: (e: React.MouseEvent) => void;
    Up: (e: React.MouseEvent) => void;
    Leave: (e: React.MouseEvent) => void;
  };
  viewBoxString: string;
  scale: number;
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
} => {
  const [size, setSize] = useState<Size>({ w: svgWidth, h: svgHeight });
  const [viewBox, setViewBox] = useState<ViewBox>({
    x: 0,
    y: 0,
    w: size.w,
    h: size.h,
  });

  const [isPanning, setIsPanning] = useState<Boolean>(false);
  const [startPoint, setStartPoint] = useState<StartPoint>({
    x: 0,
    y: 0,
  });
  const { x, y, w, h } = viewBox;
  const scale = size.w / w; //sets zoom multiplier
  const onMouseWheel = (e: React.WheelEvent) => {
    const mx = e.nativeEvent.offsetX; // mouse x offset from svgContainer left
    const my = e.nativeEvent.offsetY; // mouse Y offset from svgContainer top
    //  e.deltaY positive for scroll up negative for scroll down
    const dw = -w * Math.sign(e.deltaY) * scrollAdjustment; // enlarge if scroll up minimmize if scroll down
    const dh = -h * Math.sign(e.deltaY) * scrollAdjustment; // enlarge if scroll up minimmize if scroll down
    const dx = (dw * mx) / size.w; // the adjustment in x to be displayed per scroll
    const dy = (dh * my) / size.h; // the adjustment in y to be displayed per scroll
    console.log(maxScale, scale, minScale);
    if (maxScale && maxScale >= scale && dw < 0) {
      return;
    }
    if (minScale && minScale <= scale && dw > 0) {
      return;
    }

    setViewBox({
      x: x + dx,
      y: y + dy,
      w: w - dw,
      h: h - dh,
    });
  };
  const onMouseDown = (e: React.MouseEvent) => {
    setIsPanning(true);
    setStartPoint({ x: e.nativeEvent.x, y: e.nativeEvent.y }); //sets mouse click position
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      const endPoint = { x: e.nativeEvent.x, y: e.nativeEvent.y }; // moves endpoint as mouse is dragged
      const dx = (startPoint.x - endPoint.x) / scale; //calculates change in position
      const dy = (startPoint.y - endPoint.y) / scale; //calculates change in position
      setStartPoint(endPoint);
      setViewBox({
        x: viewBox.x + dx,
        y: viewBox.y + dy,
        w: viewBox.w,
        h: viewBox.h,
      });
    }
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (isPanning) {
      const endPoint = { x: e.nativeEvent.x, y: e.nativeEvent.y };
      const dx = (startPoint.x - endPoint.x) / scale;
      const dy = (startPoint.y - endPoint.y) / scale;
      setViewBox({
        x: viewBox.x + dx,
        y: viewBox.y + dy,
        w: viewBox.w,
        h: viewBox.h,
      });

      setIsPanning(false);
    }
  };
  const onMouseLeave = (e: React.MouseEvent) => {
    setIsPanning(false);
  };
  const viewBoxString = `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`;
  const onMouse = {
    Wheel: onMouseWheel,
    Down: onMouseDown,
    Move: onMouseMove,
    Up: onMouseUp,
    Leave: onMouseLeave,
  };
  // pass onMouse to svg container
  // set svg viewbox={viewBoxString}
  return { viewBox, setViewBox, onMouse, viewBoxString, scale, size, setSize };
};
export default useViewBox;
