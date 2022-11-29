import React, { useEffect } from "react";
import { svgPaths } from "../../svg";
import { SelectedCountryType } from "../WorldMap/types";
import useViewBox from "./hooks/useViewBox";
import { ViewBox } from "./hooks/useViewBox/types";
import { useSvgCircle } from "./hooks/useSvgCircle";
import { useWindowSize } from "./hooks/useWindowSize";
interface Props {
  selectedCountry: SelectedCountryType | null;
  children?: JSX.Element[] | JSX.Element;
}

const SVGHeight = 800;
const SVGWidth = 800;

const countryCenterPoint = (id: string) => {
  const el = document.getElementById(id);
  if (el instanceof SVGPathElement) {
    const bBox = el.getBBox();
    console.log("bBox", bBox);
    return {
      x: bBox.x + bBox.width / 2,
      y: bBox.y + bBox.height / 2,
    };
  }
};

const centerViewBox = (id: string, viewBox: ViewBox) => {
  const centerPoint = countryCenterPoint(id);
  if (centerPoint) {
    const newViewBox = {
      x: centerPoint.x - viewBox.w / 2,
      y: centerPoint.y - viewBox.h / 2,
      w: viewBox.w,
      h: viewBox.h,
    };
    return newViewBox;
  }
  return viewBox;
};
const SvgDragAndZoom: React.FC<Props> = ({ selectedCountry, children = [] }) => {
  const circleStyle = useSvgCircle(selectedCountry);
  const { viewBox, setViewBox, onMouse, viewBoxString } = useViewBox({
    svgWidth: SVGWidth,
    svgHeight: SVGHeight,
    maxScale: 1,
    minScale: 25,
  });

  useEffect(() => {
    console.log("new country");
    if (!selectedCountry?.id) {
      return;
    }
    const newViewBox = centerViewBox(selectedCountry.id, viewBox);
    setViewBox(newViewBox);
  }, [selectedCountry]);
  return (
    <div
      id="svgContainer"
      onWheel={onMouse.Wheel}
      onMouseDown={onMouse.Down}
      onMouseMove={onMouse.Move}
      onMouseUp={onMouse.Up}
      onMouseLeave={onMouse.Leave}
    >
      {children ? children : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBoxString}
        height={SVGHeight}
        width={SVGWidth}
        id="map"
        className={`map ${!selectedCountry ? "start_haze" : ""}`}
      >
        {svgPaths.map((entry, index) => (
          <path d={entry.d} id={entry.id} key={entry.id} />
        ))}

        <circle
          id="small_country_circle"
          cx={circleStyle.cx}
          cy={circleStyle.cy}
          r={circleStyle.r}
          stroke="green"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SvgDragAndZoom;
