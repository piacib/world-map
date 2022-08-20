import React from "react";
import { randomNumberOrder, randomEntriesNonRepeating } from "./functions";
import { countriesByContinent, ContinentType } from "../../countries";
interface Props {
  correctCountry: string | null;
  continent: ContinentType | null;
}
const MultipleChoice: React.FC<Props> = ({ correctCountry, continent }) => {
  if (!correctCountry || !continent) {
    return <></>;
  }
  const order = randomNumberOrder(4);
  const tempArr = Object.keys(countriesByContinent[continent]);
  console.log("first", tempArr);
  const correctCountryIndex = tempArr.indexOf(correctCountry);
  console.log("correctCountryIndex", correctCountryIndex);
  tempArr.splice(correctCountryIndex, 1);
  console.log("post", tempArr);
  const incorrectOptions = randomEntriesNonRepeating({
    arr: tempArr,
    outputLength: 3,
  });
  let countryList = [correctCountry, ...incorrectOptions];

  return (
    <div>
      {order.map((x) => (
        <button>{countryList[x]}</button>
      ))}
    </div>
  );
};

export default MultipleChoice;
