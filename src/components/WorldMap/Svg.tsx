import React, { useEffect, useLayoutEffect, useState } from "react";
import { zoomAddOn } from "./zoom";
import { svgPaths } from "../../svg";
import { CircleCountryType, SelectedCountryType } from "./types";
const center = (startFactor = 100) => {
  const highlightElement = document.getElementsByClassName("highlight")[0];
  if (highlightElement instanceof SVGPathElement) {
    const bBox = highlightElement.getBBox();
    const viewBox = {
      x: 0,
      y: 0,
      width: 800,
      height: 800,
    };
    console.log(
      `${bBox.x + bBox.width / 2 - viewBox.width / 2} ${
        bBox.y + bBox.height / 2 - viewBox.height / 2
      } ${viewBox.width} ${viewBox.height}`,
    );
    document
      .getElementById("map")
      ?.setAttribute(
        "viewBox",
        `${bBox.x + bBox.width / 2 - viewBox.width / 2} ${
          bBox.y + bBox.height / 2 - viewBox.height / 2
        } ${viewBox.width} ${viewBox.height}`,
      );
  }
};
interface Props {
  selectedCountry: SelectedCountryType | null;
}

const Svg: React.FC<Props> = ({ selectedCountry }) => {
  const [circleStyle, setCircleStyle] = useState<CircleCountryType | null>(null);
  useEffect(() => {
    const svgContainer = document.getElementById("svg_container");
    const svg = document.getElementById("map");
    if (svg?.clientWidth && svg?.clientHeight) {
      if (svg instanceof SVGElement && svgContainer instanceof HTMLDivElement) {
        zoomAddOn(svg, svgContainer);
      }
    }
  }, []);
  useLayoutEffect(() => {
    console.log("new country");
    center();
  }, [selectedCountry]);
  // circles small contries on select
  useEffect(() => {
    if (selectedCountry) {
      const element = document.getElementById(selectedCountry.id);
      if (element instanceof SVGPathElement) {
        //&& (element.height < 15 || element.width < 15)) {
        const bBox = element.getBBox();
        const longerLength = bBox.height < bBox.width ? bBox.width : bBox.height;
        if (bBox.height < 15 || bBox.width < 15) {
          setCircleStyle({
            cx: bBox.x + bBox.width / 2,
            cy: bBox.y + bBox.height / 2,
            r: longerLength + 3,
          });
        } else {
          setCircleStyle(null);
        }
      }
    }
    return () => {};
  }, [selectedCountry]);
  return (
    <div id="svg_container" className="map_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={"0 0 1009 800"}
        width={1009}
        height={800}
        id="map"
        className={`map ${!selectedCountry ? "start_haze" : ""}`}
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
  );
};

export default Svg;
