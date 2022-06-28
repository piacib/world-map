import React, { useEffect, useState } from "react";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import "./worldMap.css";
import { Countries, countries, getRandomKey } from "../../functions/countries";
import SvgMap from "./SvgMap";
const executeScroll = (element: HTMLElement | null) => {
  if (element === null) {
    return;
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
const colorElement = (element: HTMLElement | null) => {
  if (element === null) {
    return;
  }
  element.classList.add("highlight");
};
const removeColorFromElement = (element: HTMLElement | null) => {
  if (element === null) {
    return;
  }
  element.classList.remove("highlight");
};
const WorldMap = () => {
  const [selectedCountryId, setSelectedCountryId] = useState<null | string>(
    null
  );
  const [unseenCountryList, setUnseenCountryList] =
    useState<Countries>(countries);
  const handleStartClick = () => {
    setSelectedCountryId(getRandomKey(unseenCountryList));
  };
  const selectChoice = (correct: boolean) => {
    if (correct) {
      console.log("correct!!");
    }
  };
  const handleClick = () => {
    if (!selectedCountryId) {
      return;
    }
    const temp = unseenCountryList;
    const country = getRandomKey(unseenCountryList);
    delete temp[country];
    setUnseenCountryList(temp);
    removeColorFromElement(document.getElementById(selectedCountryId));
    setSelectedCountryId(country);
  };
  useEffect(() => {
    if (selectedCountryId) {
      executeScroll(document.getElementById(selectedCountryId));
      colorElement(document.getElementById(selectedCountryId));
    }
  }, [selectedCountryId]);
  return (
    <>
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

      <SvgMap />
      {selectedCountryId && (
        <MultipleChoice
          selectChoice={(correct: boolean) => selectChoice(correct)}
          countryId={selectedCountryId}
        />
      )}
    </>
  );
};

export default WorldMap;
