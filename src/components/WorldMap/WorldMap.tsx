import React, { useEffect, useRef, useState } from "react";
import "./worldMap.css";
import { countries, Countries } from "./countries";
import {
  getRandomKey,
  executeScroll,
  colorElement,
  removeColorFromElement,
} from "./functions";
import { svgPaths } from "./svg";
const largeCountries = ["CA"];
const largeCountryCheck = (country: string) => {
  if (largeCountries.includes(country)) {
    return true;
  }
  return false;
};
const zoomer = (country: string | null): string => {
  if (!country) {
    return "";
  }
  if (largeCountryCheck(country)) {
    return "large_country_zoom_in";
  }
  return "startZoom";
};
const WorldMap = () => {
  const refs = useRef<SVGPathElement[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<null | string>(
    null
  );
  const [unseenCountryList, setUnseenCountryList] =
    useState<Countries>(countries);
  const handleStartClick = () => {
    setSelectedCountryId(getRandomKey(unseenCountryList));
  };
  const handleClick = () => {
    if (!selectedCountryId) {
      return;
    }
    console.log("handleClick", countries[selectedCountryId]);
    const temp = unseenCountryList;
    const country = getRandomKey(unseenCountryList);
    delete temp[country];
    setUnseenCountryList(temp);
    removeColorFromElement(document.getElementById(selectedCountryId));
    setSelectedCountryId(country);
    // setSelectedCountryId("CA");
  };
  useEffect(() => {
    console.log("useEffect", selectedCountryId);
    if (selectedCountryId) {
      executeScroll(document.getElementById(selectedCountryId));
      colorElement(document.getElementById(selectedCountryId));
    }
  }, [selectedCountryId]);
  console.log(refs);
  return (
    <>
      <div className="map-container">
        {!selectedCountryId ? (
          <button
            onClick={() => {
              handleStartClick();
            }}
          >
            Start
          </button>
        ) : (
          <button onClick={() => handleClick()}>New Country</button>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-169.110266 83.600842 190.486279 -58.508473"
          width="1009.6727"
          height="665.96301"
          className={`map space-adjustments ${zoomer(selectedCountryId)}`}
        >
          {svgPaths.map((entry, index) => (
            <path
              d={entry.d}
              id={entry.id}
              ref={(element) => {
                if (element) {
                  refs.current[index] = element;
                }
              }}
            />
          ))}
        </svg>
      </div>
      <p>{selectedCountryId ? selectedCountryId : "no id"}</p>
      <p>
        {selectedCountryId && countries[selectedCountryId]
          ? countries[selectedCountryId]
          : "no country"}
      </p>
    </>
  );
};

export default WorldMap;
