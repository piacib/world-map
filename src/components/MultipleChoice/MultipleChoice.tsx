import React, { useMemo, useState } from "react";
import "./multipleChoice.css";
import { randomNumberOrder, randomEntriesNonRepeating } from "./functions";
import { countriesByContinent, ContinentType } from "../../countries";
interface Props {
  correctCountry: string | null;
  continent: ContinentType | null;
  handleMultipleChoiceClick: (correct: boolean) => void;
}
const generateOptions = (
  continent: ContinentType | null,
  correctCountry: string | null
): [number[], string[]] => {
  if (!continent || !correctCountry) {
    return [[], []];
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
  // correctCountry must be first to match x === 0 in handleCLick
  return [order, [correctCountry, ...incorrectOptions]];
};
const MultipleChoice: React.FC<Props> = ({
  correctCountry,
  continent,
  handleMultipleChoiceClick,
}) => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  // only recompute if [continent, correctCountry] changed
  const [order, countryList] = useMemo(
    () => generateOptions(continent, correctCountry),
    [continent, correctCountry]
  );
  const colorOptionOnClick = (idx: number, x: number) => {
    return selectedOption === idx ? (x === 0 ? "correct" : "incorrect") : "";
  };
  const handleClick = (id: number, correct: boolean) => {
    setSelectedOption(id);

    setTimeout(() => {
      setSelectedOption(null);
      handleMultipleChoiceClick(correct);
      // delay after click before rerender
    }, 500);
  };
  return (
    <div className="multiplechoice_container">
      {order.map((x, idx) => (
        <button
          className={colorOptionOnClick(idx, x)}
          onClick={() => {
            handleClick(idx, x === 0 ? true : false);
          }}
        >
          {countryList[x]}
        </button>
      ))}
    </div>
  );
};

export default MultipleChoice;
