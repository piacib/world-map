import React, { useEffect, useState } from "react";
import { svgPaths } from "../../svg";
import { CircleCountryType, SelectedCountryType } from "./types";
import useViewBox, { ViewBox } from "./useViewBox";
interface Props {
  selectedCountry: SelectedCountryType | null;
}

const useSvgCircle = (selectedCountry: SelectedCountryType | null) => {
  const [circleStyle, setCircleStyle] = useState<CircleCountryType>(noCircle);
  // circles small contries on select
  useEffect(() => {
    if (selectedCountry) {
      const element = document.getElementById(selectedCountry.id);
      if (element instanceof SVGPathElement) {
        const bBox = element.getBBox();
        const longerLength = bBox.height < bBox.width ? bBox.width : bBox.height;
        if (bBox.height < 15 || bBox.width < 15) {
          setCircleStyle({
            cx: bBox.x + bBox.width / 2,
            cy: bBox.y + bBox.height / 2,
            r: longerLength + 3,
          });
        } else {
          setCircleStyle(noCircle);
        }
      }
    }
    return () => {};
  }, [selectedCountry]);

  return circleStyle;
};
const SVGHeight = 800;
const SVGWidth = 800;
const noCircle = {
  cx: 0,
  cy: 0,
  r: 0,
};
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

const SvgDragAndZoom: React.FC<Props> = ({ selectedCountry }) => {
  const circleStyle = useSvgCircle(selectedCountry);

  const [[viewBox, setViewBox], onMouse, viewBoxString] = useViewBox(SVGHeight, SVGWidth);

  useEffect(() => {
    console.log("new country");
    if (!selectedCountry?.id) {
      return;
    }
    const newViewBox = centerViewBox(selectedCountry.id, viewBox);
    setViewBox(newViewBox);
  }, [selectedCountry, setViewBox]);
  return (
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
