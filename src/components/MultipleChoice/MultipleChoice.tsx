import React, { useEffect, useState } from "react";
import "./multiplechoice.css";
import { countriesObj, CountriesObj } from "../../assets/combinedObj";
import { countries, getRandomKey, Countries } from "../../functions/countries";
import Option from "../Option/Option";
interface Props {
  countryId: keyof CountriesObj;
  selectChoice: (correct: boolean) => void;
}
const getRandomEntry = (obj: { [s: string]: any }) => {
  return obj[getRandomKey(obj)];
};
const MultipleChoice: React.FC<Props> = ({ countryId, selectChoice }) => {
  const [options, setOptions] = useState<string[]>([]);
  useEffect(() => {
    if (countriesObj[countryId]?.name && countriesObj[countryId].bordering) {
      setOptions([
        ...countriesObj[countryId].bordering,
        getRandomEntry(countries),
        getRandomEntry(countries),
      ]);
    } else {
      setOptions([
        getRandomEntry(countries),
        getRandomEntry(countries),
        getRandomEntry(countries),
      ]);
    }
  }, [countryId]);
  return (
    <>
      <form className="boxed">
        <Option
          onClick={() => selectChoice(true)}
          choiceId={countriesObj[countryId].name}
        />
        {options.slice(0, 3).map((countryOption) => (
          <Option
            onClick={() => selectChoice(false)}
            choiceId={countryOption}
          />
        ))}
      </form>
    </>
  );
};

export default MultipleChoice;
