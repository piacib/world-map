import React, { useEffect, useState } from "react";
import { CircleCountryType } from "./types";
import { SelectedCountryType } from "../../../WorldMap/types";
const noCircle = {
  cx: 0,
  cy: 0,
  r: 0,
};
export const useSvgCircle = (selectedCountry: SelectedCountryType | null) => {
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
