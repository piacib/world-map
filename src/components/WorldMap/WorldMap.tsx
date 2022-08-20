import React, { useEffect, useState } from "react";
import "./worldMap.css";
import {
  getRandomKey,
  // executeScroll,
  colorElement,
  removeColorFromElement,
} from "./functions";
import { svgPaths } from "../../svg";
import {
  Countries,
  ContinentType,
  countriesByContinent,
} from "../../countries";
import ButtonDisplay from "./ButtonDisplay";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
type ContinentToCssType = { [K in ContinentType]: string };
const continentToCss: ContinentToCssType = {
  "North America": "north_america",
  "South America": "south_america",
  Europe: "europe",
  Africa: "africa",
  Asia: "asia",
  Oceania: "oceania",
};
interface Props {
  continent: ContinentType | null;
}
export type SelectedCountryType = {
  name: string;
  id: string;
};
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
  const handleClick = () => {
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
  useEffect(() => {
    if (selectedCountry) {
      colorElement(document.getElementById(selectedCountry.id));
    }
  }, [selectedCountry]);
  const multipleChoiceOptions = selectedCountry?.name
    ? [selectedCountry.name]
    : null;
  return (
    <>
      <div className="map-container">
        <ButtonDisplay
          continent={continent}
          selectedCountry={selectedCountry}
          handleStartClick={handleStartClick}
          handleClick={handleClick}
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
        displayNewCountry={handleClick}
      />
    </>
  );
};

export default WorldMap;
