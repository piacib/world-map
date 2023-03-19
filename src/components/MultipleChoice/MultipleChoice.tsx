import React, { useMemo, useState } from "react";
import "./multipleChoice.css";
import { randomNumberOrder, randomEntriesNonRepeating } from "./functions";
import { countriesByContinent, ContinentType } from "../../countries";
interface Props {
  correctCountry: string | null;
  continent: ContinentType | null;
  handleMultipleChoiceClick: (correct: boolean) => void;
  delay?: number;
  children?: JSX.Element;
}
const generateOptions = (
  continent: ContinentType | null,
  correctCountry: string | null,
): {
  name: string;
  isCorrect: boolean;
}[] => {
  if (!continent || !correctCountry) {
    return [];
  }
  // Number of choices in multiplechoice
  const order = randomNumberOrder(4);
  const tempArr = Object.keys(countriesByContinent[continent]);
  const correctCountryIndex = tempArr.indexOf(correctCountry);
  tempArr.splice(correctCountryIndex, 1);
  const incorrectOptions = randomEntriesNonRepeating({
    arr: tempArr,
    outputLength: 3,
  });
  const options = [correctCountry, ...incorrectOptions];
  const randomizedOptions = order.map((index) => options[index]);

  const optionsReturn = randomizedOptions.map((country) => ({
    name: country,
    isCorrect: country === correctCountry,
  }));
  // correctCountry must be first to match x === 0 in handleCLick
  return optionsReturn;
};
const highlightCorrectEl = (correctCountry: string | null) => {
  if (correctCountry) {
    const correctEl = document.getElementById(correctCountry);
    if (correctEl) {
      console.log("list", correctEl.classList);
      correctEl.classList.add("correct");
    }
  }
};
const unhighlightCorrectEl = (correctCountry: string | null) => {
  if (correctCountry) {
    const correctEl = document.getElementById(correctCountry);
    if (correctEl) {
      console.log("list", correctEl.classList);
      correctEl.classList.remove("correct");
    }
  }
};
const colorOptionOnClick = (idx: number, isCorrect: boolean, selectedOption: null | number) => {
  return selectedOption === idx ? (isCorrect ? "correct" : "incorrect") : "";
};

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
