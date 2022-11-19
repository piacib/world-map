import React from "react";
import "./continentOptions.css";
import { continents, ContinentType, isContinent } from "../../countries";
interface Props {
  setOption: (option: ContinentType) => void;
}
const ContinentOptions: React.FC<Props> = ({ setOption }) => {
  return (
    <ul
      onClick={(e) => {
        const element = (e.target as HTMLLIElement).innerHTML;
        if (isContinent(element)) {
          setOption(element);
        }
      }}
      className="continent_options_menu"
    >
      {continents.map((x: ContinentType) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
};

export default ContinentOptions;
