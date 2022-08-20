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
  const correctClick = () => {
    alert("correct");
    displayNewCountry();
  };
  const incorrectClick = () => {
    alert("incorrect");
    displayNewCountry();
  };
  const order = randomNumberOrder(4);
  const tempArr = Object.keys(countriesByContinent[continent]);
  const correctCountryIndex = tempArr.indexOf(correctCountry);
  tempArr.splice(correctCountryIndex, 1);
  const incorrectOptions = randomEntriesNonRepeating({
    arr: tempArr,
    outputLength: 3,
  });
  const incorrectCountrySets: [string, () => void][] = incorrectOptions.map(
    (x) => [x, incorrectClick]
  );
  let countryList: [string, () => void][] = [
    [correctCountry, correctClick],
    ...incorrectCountrySets,
  ];

  return (
    <div>
      {order.map((x) => (
        <button onClick={countryList[x][1]}>{countryList[x][0]}</button>
      ))}
    </div>
  );
};

export default MultipleChoice;
