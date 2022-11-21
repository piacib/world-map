import React, { useEffect, useState } from "react";
import { svgPaths } from "../../svg";
import { CircleCountryType } from "./types";
type ViewBox = {
  x: number;
  y: number;
  w: number;
  h: number;
};
type StartPoint = { x: number; y: number };

const useViewBox = (
  svgWidth: number,
  svgHeight: number,
  scrollAdjustment = 0.05,
): [
  [ViewBox, React.Dispatch<React.SetStateAction<ViewBox>>],
  {
    Wheel: (e: React.WheelEvent) => void;
    Down: (e: React.MouseEvent) => void;
    Move: (e: React.MouseEvent) => void;
    Up: (e: React.MouseEvent) => void;
    Leave: (e: React.MouseEvent) => void;
  },
  string,
  number,
] => {
  const [viewBox, setViewBox] = useState<ViewBox>({
    x: 0,
    y: 0,
    w: svgWidth,
    h: svgHeight,
  });
  const [isPanning, setIsPanning] = useState<Boolean>(false);
  const [startPoint, setStartPoint] = useState<StartPoint>({
    x: 0,
    y: 0,
  });
  const { x, y, w, h } = viewBox;
  const onMouseWheel = (e: React.WheelEvent) => {
    // e.preventDefault();
    const mx = e.nativeEvent.offsetX; // mouse x offset from svgContainer left
    const my = e.nativeEvent.offsetY; // mouse Y offset from svgContainer top
    console.log("onMouseWheel", mx, my);
    //   //  e.deltaY positive for scroll up negative for scroll down
    const dw = w * Math.sign(e.deltaY) * scrollAdjustment; // enlarge if scroll up minimmize if scroll down
    const dh = h * Math.sign(e.deltaY) * scrollAdjustment; // enlarge if scroll up minimmize if scroll down
    const dx = (dw * mx) / w; // the increased width to be displayed per scroll
    const dy = (dh * my) / h; // the increased height to be displayed per scroll
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
    console.log("onMouseDown", { x: e.nativeEvent.x, y: e.nativeEvent.y });
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      console.log("onMouseMove", startPoint);
      const endPoint = { x: e.nativeEvent.x, y: e.nativeEvent.y }; // moves endpoint as mouse is dragged
      console.log("b", startPoint, endPoint);
      const dx = (startPoint.x - endPoint.x) / scale; //calculates change in position
      const dy = (startPoint.y - endPoint.y) / scale; //calculates change in position
      console.log("a", dx, dy);
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
  const scale = svgWidth / w; //sets zoom multiplier

  return [[viewBox, setViewBox], onMouse, viewBoxString, scale];
};

interface Props {
  svgHeight?: number;
  svgWidth?: number;
}

const SVGHeight = 800;
const SVGWidth = 1008;

const SvgDragAndZoom: React.FC<Props> = ({ svgHeight = SVGHeight, svgWidth = SVGWidth }) => {
  const [circleStyle, setCircleStyle] = useState<CircleCountryType | null>(null);

  const [[, setViewBox], onMouse, viewBoxString] = useViewBox(SVGHeight, SVGWidth);
  return (
    <>
      <button
        id="button"
        onClick={() =>
          setViewBox({
            x: 0,
            y: 0,
            w: svgWidth,
            h: svgHeight,
          })
        }
      >
        ClickMe
      </button>
      <span id="zoomValue">{1}</span>

      <div
        id="svgContainer"
        onWheel={onMouse.Wheel}
        onMouseDown={onMouse.Down}
        onMouseMove={onMouse.Move}
        onMouseUp={onMouse.Up}
        onMouseLeave={onMouse.Leave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBoxString}
          height={svgHeight}
          width={svgWidth}
          id="map"
          className={`map`}
          // ${!selectedCountry ? "start_haze" : ""}`}
        >
          {svgPaths.map((entry, index) => (
            <path d={entry.d} id={entry.id} key={entry.id} />
          ))}
          {circleStyle && (
            <circle
              id="small_country_circle"
              cx={circleStyle.cx}
              cy={circleStyle.cy}
              r={circleStyle.r}
              stroke="green"
              fill="none"
            />
          )}
        </svg>
      </div>
    </>
  );
};

export default SvgDragAndZoom;
