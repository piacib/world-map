import React from "react";
import { randomNumberOrder, randomEntriesNonRepeating } from "./functions";
import { countriesByContinent, ContinentType } from "../../countries";
interface Props {
  correctCountry: string | null;
  continent: ContinentType | null;
  displayNewCountry: () => void;
}
const MultipleChoice: React.FC<Props> = ({
  correctCountry,
  continent,
  displayNewCountry,
}) => {
  if (!correctCountry || !continent) {
    return <></>;
  }
  const handleClick = (id: number, correct: boolean) => {
    displayNewCountry();
    alert(`${correct}, ${id}`);
  };
  const order = randomNumberOrder(4);
  const tempArr = Object.keys(countriesByContinent[continent]);
  const correctCountryIndex = tempArr.indexOf(correctCountry);
  tempArr.splice(correctCountryIndex, 1);
  const incorrectOptions = randomEntriesNonRepeating({
    arr: tempArr,
    outputLength: 3,
  });

  let countryList = [correctCountry, ...incorrectOptions];

  return (
    <div>
      {order.map((x, idx) => (
        <button
          id={`option${idx + 1}`}
          onClick={() => {
            handleClick(idx + 1, true);
          }}
        >
          {countryList[idx]}
        </button>
      ))}
    </div>
  );
};

export default MultipleChoice;
