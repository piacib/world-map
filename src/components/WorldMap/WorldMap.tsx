import React, { useEffect, useState } from 'react';
import './worldMap.css';
import {
  getRandomKey,
  colorElement,
  removeColorFromElement,
  centerCountry,
  transformVars,
} from './functions';
import { svgPaths } from '../../svg';
import { Countries, ContinentType, countriesByContinent } from '../../countries';
import ButtonDisplay from './ButtonDisplay';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import { SelectedCountryType, CircleCountryType } from './types';
import GrabDrag from '../GrabDrag/GrabDrag';
import useScroll from '../../hooks/useScroll';

interface Props {
  continent: ContinentType | null;
  translateSensitivity?: number;
}
const WorldMap: React.FC<Props> = ({ continent, translateSensitivity = 3 }) => {
  const [selectedCountry, setSelectedCountry] = useState<null | SelectedCountryType>(null);
  const [unseenCountryList, setUnseenCountryList] = useState<Countries | null>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [[zoom, setZoom], onWheel] = useScroll();
  const [circleStyle, setCircleStyle] = useState<CircleCountryType | null>(null);
  const [correctChoice, setCorrectChoice] = useState<number>(0);
  // sets country list on continent select
  useEffect(() => {
    if (continent) {
      setUnseenCountryList(countriesByContinent[continent]);
      setZoom({ ...zoom, scale: transformVars[continent].scale });
      setTranslate({
        x: transformVars[continent].x / translateSensitivity,
        y: transformVars[continent].y / translateSensitivity,
      });
    }
  }, [continent, setZoom, translateSensitivity]);

  // colors element on select
  useEffect(() => {
    if (selectedCountry) {
      colorElement(document.getElementById(selectedCountry.id));
    }
  }, [selectedCountry]);

  // circles small contries on select
  useEffect(() => {
    if (selectedCountry) {
      const element = document.getElementById(selectedCountry.id);
      if (element instanceof SVGPathElement) {
        //&& (element.height < 15 || element.width < 15)) {
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

      if (selectedCountry) {
        const element = document.getElementById(unseenCountryList[name]);
        let tempScale = zoom.scale;
        if (element instanceof SVGPathElement) {
          const elementWidth = element.getBBox().width;
          const mapWidth = document
            .getElementsByClassName('map_container')[0]
            .getBoundingClientRect().width;
          while (elementWidth * tempScale > mapWidth) {
            tempScale -= 0.2;
          }
          console.log(zoom.scale, tempScale);
        }
        if (tempScale !== zoom.scale) {
          setZoom({ ...zoom, scale: tempScale });
        } else {
          centerCountry(unseenCountryList[name]);
        }
      }
      setSelectedCountry({ name: name, id: unseenCountryList[name] });
    }
  };
  useEffect(() => {
    console.log('zoom changed');
    if (selectedCountry) {
      centerCountry(selectedCountry.id);
    }
  }, [zoom]);
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
      <div
        className="map_container"
        onWheel={(e) => {
          onWheel(e);
          setTranslate({
            x: 0,
            y: 0,
          });
        }}
      >
        <ButtonDisplay
          continent={continent}
          selectedCountry={selectedCountry}
          handleStartClick={handleStartClick}
          handleClick={displayNewCountry}
        />

        <GrabDrag
          disabled
          translateSensitivity={3}
          translate={translate}
          setTranslate={setTranslate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-169.110266 83.600842 190.486279 -58.508473"
            width={`${1009.6727}`}
            // additional size
            height={`${665.96301}`}
            style={{
              transformOrigin: '0 0',
              transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale}`,
            }}
            id="map"
            className={`map
            } ${!selectedCountry ? 'start_haze' : ''}`}
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
        </GrabDrag>
      </div>
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
