import React from "react";
import "./continentOptions.css";
// custom continent type and options display. To add continent just add
// continent to list
const continents = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
] as const;
export type ContinentType = typeof continents[number];
// type guard function to see if string is in continent
const isContinent = (x: any): x is ContinentType => continents.includes(x);
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
