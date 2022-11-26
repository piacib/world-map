import React, { useEffect, useState } from "react";
import "./worldMap.css";
import { getRandomKey, colorElement, removeColorFromElement, centerCountry } from "./functions";
import { Countries, ContinentType, countriesByContinent } from "../../countries";
import ButtonDisplay from "./ButtonDisplay";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import { SelectedCountryType } from "./types";
import SvgDragAndZoom from "../SvgDragAndZoom";

interface Props {
  continent: ContinentType | null;
  translateSensitivity?: number;
}
const WorldMap: React.FC<Props> = ({ continent, translateSensitivity = 3 }) => {
  const [selectedCountry, setSelectedCountry] = useState<null | SelectedCountryType>(null);
  const [unseenCountryList, setUnseenCountryList] = useState<Countries | null>(null);
  const [correctChoice, setCorrectChoice] = useState<number>(0);

  const displayNewCountry = (CountryList?: Countries | null) => {
    if (!selectedCountry) {
      return;
    }
    if (!CountryList) {
      CountryList = selectedCountry;
    }
    if (CountryList) {
      const name = getRandomKey(CountryList);
      setUnseenCountryList((current) => {
        const copy = { ...CountryList };
        delete copy[name];
        return copy;
      });
      if (selectedCountry) {
        removeColorFromElement(document.getElementById(selectedCountry.id));
      }

      setSelectedCountry({ name: name, id: CountryList[name] });
    }
  };
  // sets country list on continent select
  useEffect(() => {
    if (continent) {
      console.log("continent change");
      setUnseenCountryList(countriesByContinent[continent]);
      displayNewCountry(countriesByContinent[continent]);
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
    console.log("start", unseenCountryList);
    if (unseenCountryList) {
      const randomKey = getRandomKey(unseenCountryList);
      setSelectedCountry({ name: randomKey, id: unseenCountryList[randomKey] });
      centerCountry(unseenCountryList[randomKey]);
    }
  };

  const handleMultipleChoiceClick = (correct: boolean) => {
    if (correct) {
      setCorrectChoice(correctChoice + 1);
    } else {
    }
    displayNewCountry(unseenCountryList);
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
      <SvgDragAndZoom selectedCountry={selectedCountry} />
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
