import React, { useEffect, useRef, useState } from "react";
import "./worldMap.css";
import { countries, Countries } from "../../countries";
import {
  getRandomKey,
  executeScroll,
  colorElement,
  removeColorFromElement,
} from "./functions";
import { svgPaths } from "./svg";
import { ContinentType } from "../../countries";

interface Props {
  continent: ContinentType | null;
}
const WorldMap: React.FC<Props> = ({ continent }) => {
  const refs = useRef<SVGPathElement[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<null | string>(
    null
  );
  const [unseenCountryList, setUnseenCountryList] =
    useState<Countries>(countries);
  const handleStartClick = () => {
    setSelectedCountryId(getRandomKey(unseenCountryList));
    setSelectedCountryId("CA");
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
        {!selectedCountryId && (
          <button
            className="start_button"
            onClick={() => {
              handleStartClick();
            }}
          >
            Start
          </button>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-169.110266 83.600842 190.486279 -58.508473"
          width="1009.6727"
          height="665.96301"
          className={`map space-adjustments ${
            !selectedCountryId ? "start_haze" : ""
          }`}
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

      {selectedCountryId && (
        <button onClick={() => handleClick()}>New Country</button>
      )}
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
