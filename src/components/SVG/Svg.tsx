import React, { useEffect, useLayoutEffect, useState } from "react";
import { zoomAddOn } from "../WorldMap/zoom";
import { svgPaths } from "../../svg";
import { CircleCountryType, SelectedCountryType } from "../WorldMap/types";
import { center } from "./functions";

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
    // center();
  }, [selectedCountry]);

  // useEffect(() => {
  //   if (selectedCountry) {
  //     const element = document.getElementById(selectedCountry.id);
  //     if (element instanceof SVGPathElement) {
  //       element.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //       const bBox = element.getBBox();
  //       console.log(element);
  //       const svg = document.getElementById("map");
  //       if (svg instanceof SVGElement) {
  //         const num = 2;
  //         // console.log(svg.viewBox);
  //         svg.setAttribute(
  //           "viewBox",
  //           `${bBox.x - bBox.width / num} ${bBox.y - bBox.height / num} ${bBox.width * num} ${
  //             bBox.height * num
  //           }`,
  //         );
  //       }
  //     }
  //   }
  // }, [selectedCountry]);

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
