import React, { useEffect, useState } from "react";
import "./worldMap.css";
import { getRandomKey, colorElement, removeColorFromElement, centerCountry } from "./functions";
import { Countries, ContinentType, countriesByContinent } from "../../countries";
import ButtonDisplay from "./ButtonDisplay";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import { SelectedCountryType } from "./types";
import Svg from "./Svg";

interface Props {
  continent: ContinentType | null;
  translateSensitivity?: number;
}
const WorldMap: React.FC<Props> = ({ continent, translateSensitivity = 3 }) => {
  const [selectedCountry, setSelectedCountry] = useState<null | SelectedCountryType>(null);
  const [unseenCountryList, setUnseenCountryList] = useState<Countries | null>(null);
  const [correctChoice, setCorrectChoice] = useState<number>(0);

  // sets country list on continent select
  useEffect(() => {
    if (continent) {
      setUnseenCountryList(countriesByContinent[continent]);
    }
  }, [continent]);

  // colors element on select
  useEffect(() => {
    if (selectedCountry) {
      colorElement(document.getElementById(selectedCountry.id));
    }
  }, [selectedCountry]);

  // sets first selected country
  const handleStartClick = () => {
    if (unseenCountryList) {
      const randomKey = getRandomKey(unseenCountryList);
      setSelectedCountry({ name: randomKey, id: unseenCountryList[randomKey] });
      centerCountry(unseenCountryList[randomKey]);
    }
  };

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
      setCorrectChoice(correctChoice + 1);
    } else {
    }
    displayNewCountry();
  };
  const trackerDisplay = () => {
    if (!continent) {
      return;
    }
    if (!unseenCountryList) {
      return;
    }
    const totalCountries = Object.keys(countriesByContinent[continent]).length;
    const unseenCounties = Object.keys(unseenCountryList).length;
    if (totalCountries === unseenCounties) {
      return;
    }
    return `${correctChoice}/${
      Object.keys(countriesByContinent[continent]).length - Object.keys(unseenCountryList).length
    }`;
  };
  return (
    <>
      <ButtonDisplay
        continent={continent}
        selectedCountry={selectedCountry}
        handleStartClick={handleStartClick}
        handleClick={displayNewCountry}
      />
      <Svg selectedCountry={selectedCountry} />
      <div id="tracker">{trackerDisplay()}</div>
      <MultipleChoice
        correctCountry={selectedCountry ? selectedCountry.name : null}
        continent={continent}
        handleMultipleChoiceClick={(correct) => handleMultipleChoiceClick(correct)}
      />
    </>
  );
};

export default WorldMap;
