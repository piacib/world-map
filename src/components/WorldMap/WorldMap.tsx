import React, { useEffect, useState } from "react";
import "./worldMap.css";
import {
  getRandomKey,
  // executeScroll,
  colorElement,
  removeColorFromElement,
  continentToCss,
} from "./functions";
import { svgPaths } from "../../svg";
import {
  Countries,
  ContinentType,
  countriesByContinent,
} from "../../countries";
import ButtonDisplay from "./ButtonDisplay";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import { SelectedCountryType } from "./types";

interface Props {
  continent: ContinentType | null;
}

const WorldMap: React.FC<Props> = ({ continent }) => {
  const [selectedCountry, setSelectedCountry] =
    useState<null | SelectedCountryType>(null);
  const [unseenCountryList, setUnseenCountryList] = useState<Countries | null>(
    null
  );
  // sets first selected country
  const handleStartClick = () => {
    if (unseenCountryList) {
      const randomKey = getRandomKey(unseenCountryList);
      setSelectedCountry({ name: randomKey, id: unseenCountryList[randomKey] });
    }
  };
  // sets country list on continent select
  useEffect(() => {
    if (continent) {
      setUnseenCountryList(countriesByContinent[continent]);
    }
  }, [continent]);
  const displayNewCountry = () => {
    if (!selectedCountry) {
      return;
    }
    if (unseenCountryList) {
      const name = getRandomKey(unseenCountryList);
      setUnseenCountryList((current) => {
        const copy = { ...current };
        delete copy[name];
        return copy;
      });
      if (selectedCountry) {
        removeColorFromElement(document.getElementById(selectedCountry.id));
      }
      setSelectedCountry({ name: name, id: unseenCountryList[name] });
    }
  };
  const handleMultipleChoiceClick = (correct: boolean) => {
    if (correct) {
      console.log("correct!");
    } else {
      console.log("incorrect");
    }
    displayNewCountry();
  };
  useEffect(() => {
    if (selectedCountry) {
      colorElement(document.getElementById(selectedCountry.id));
    }
  }, [selectedCountry]);
  return (
    <>
      <div className="map-container">
        <ButtonDisplay
          continent={continent}
          selectedCountry={selectedCountry}
          handleStartClick={handleStartClick}
          handleClick={displayNewCountry}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-169.110266 83.600842 190.486279 -58.508473"
          width="1009.6727"
          height="665.96301"
          className={`map space_adjustments ${
            continent ? continentToCss[continent] : ""
          } ${!selectedCountry ? "start_haze" : ""}`}
        >
          {svgPaths.map((entry, index) => (
            <path d={entry.d} id={entry.id} />
          ))}
        </svg>
      </div>

      <MultipleChoice
        correctCountry={selectedCountry ? selectedCountry.name : null}
        continent={continent}
        handleMultipleChoiceClick={(correct) =>
          handleMultipleChoiceClick(correct)
        }
      />
    </>
  );
};

export default WorldMap;
