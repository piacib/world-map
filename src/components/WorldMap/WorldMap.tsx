import React, { useEffect, useState } from "react";
import "./worldMap.css";
import {
  getRandomKey,
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
import { SelectedCountryType } from "./types";
import GrabDrag from "../GrabDrag/GrabDrag";
import useScroll from "../../hooks/useScroll";

interface Props {
  continent: ContinentType | null;
}
const translateSensitivity = 3;
const transformVars: {
  [K in ContinentType]: { scale: number; x: number; y: number };
} = {
  "North America": {
    scale: 2.5,
    x: 864,
    y: 105,
  },
  Africa: {
    scale: 3,
    x: -66,
    y: -408,
  },
  Europe: {
    scale: 3.5,
    x: 0,
    y: 156,
  },
  "South America": {
    scale: 3,
    x: 624,
    y: -636,
  },
  Oceania: {
    scale: 3,
    x: -1077,
    y: -510,
  },
  Asia: {
    scale: 2.1,
    x: -507,
    y: -18,
  },
};
const WorldMap: React.FC<Props> = ({ continent }) => {
  const [selectedCountry, setSelectedCountry] =
    useState<null | SelectedCountryType>(null);
  const [unseenCountryList, setUnseenCountryList] = useState<Countries | null>(
    null
  );
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [[zoom, setZoom], onWheel] = useScroll();
  // sets country list on continent select

  useEffect(() => {
    console.log("recheck");
    if (continent) {
      setUnseenCountryList(countriesByContinent[continent]);
      setZoom(transformVars[continent].scale);
      setTranslate({
        x: transformVars[continent].x / translateSensitivity,
        y: transformVars[continent].y / translateSensitivity,
      });
    }
  }, [continent, setZoom]);
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
      console.log("correct!");
    } else {
      console.log("incorrect");
    }
    displayNewCountry();
  };
  return (
    <>
      <div
        className="map_container"
        onWheel={(e) => {
          onWheel(e);
        }}
      >
        <ButtonDisplay
          continent={continent}
          selectedCountry={selectedCountry}
          handleStartClick={handleStartClick}
          handleClick={displayNewCountry}
        />
        <GrabDrag
          translateSensitivity={3}
          translate={translate}
          setTranslate={setTranslate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-169.110266 83.600842 190.486279 -58.508473"
            width="1009.6727"
            height="665.96301"
            style={{
              transform: `scale(${zoom}`,
            }}
            className={`map
            } ${!selectedCountry ? "start_haze" : ""}`}
          >
            {svgPaths.map((entry, index) => (
              <path d={entry.d} id={entry.id} />
            ))}
          </svg>
        </GrabDrag>
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
