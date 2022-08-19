import React from "react";
import { ContinentType } from "../../countries";
import { SelectedCountryType } from "./WorldMap";
interface Props {
  continent: ContinentType | null;
  selectedCountry: SelectedCountryType | null;
  handleStartClick: () => void;
}
const ButtonDisplay: React.FC<Props> = ({
  continent,
  selectedCountry,
  handleStartClick,
}) => {
  return (
    <>
      {Boolean(continent) ? (
        !selectedCountry && (
          <button
            className="start_button"
            onClick={() => {
              handleStartClick();
            }}
          >
            Start
          </button>
        )
      ) : (
        <button
          className="start_button"
          onClick={() => {
            handleStartClick();
          }}
          disabled
        >
          Select A Continent Above
        </button>
      )}
    </>
  );
};

export default ButtonDisplay;
