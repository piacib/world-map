import React, { useMemo, useState } from "react";
import "./multipleChoice.css";
import {
  generateOptions,
  highlightCorrectEl,
  unhighlightCorrectEl,
  colorOptionOnClick,
} from "./functions";
import { ContinentType } from "../../countries";

interface Props {
  correctCountry: string | null;
  continent: ContinentType | null;
  handleMultipleChoiceClick: (correct: boolean) => void;
  delay?: number;
  children?: JSX.Element;
}
const MultipleChoice: React.FC<Props> = ({
  correctCountry,
  continent,
  handleMultipleChoiceClick,
  delay = 500,
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  // only recompute if [continent, correctCountry] changed
  const countryList = useMemo(
    () => generateOptions(continent, correctCountry),
    [continent, correctCountry],
  );
  const handleClick = (id: number, correct: boolean) => {
    setSelectedOption(id);
    highlightCorrectEl(correctCountry);
    setTimeout(() => {
      setSelectedOption(null);
      handleMultipleChoiceClick(correct);
      unhighlightCorrectEl(correctCountry);
      // delay after click before rerender
    }, delay);
  };
  return (
    <div className="tracker_choice_container">
      {children ? children : null}
      <div className="multiplechoice_container">
        {countryList.map((country, idx) => (
          <button
            className={colorOptionOnClick(idx, country.isCorrect, selectedOption)}
            id={country.name}
            key={country.name}
            onClick={() => {
              handleClick(idx, country.isCorrect);
            }}
          >
            {country.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
