import React from "react";
import "./App.css";
import ContinentOptions from "./components/ContinentOptions/ContinentOptions";
import WorldMap from "./components/WorldMap/WorldMap";
import { ContinentType } from "./countries";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Worldle from "./components/Wordle";
function App() {
  const [continent, setContinent] = useLocalStorage<ContinentType | null>("continent", null);
  console.log(continent);
  return (
    <div className="app">
      <ContinentOptions setOption={(option: ContinentType) => setContinent(option)} />
      <WorldMap continent={continent} />
      <Worldle />
    </div>
  );
}

export default App;
