import React from "react";
import "./App.css";
import ContinentOptions from "./components/ContinentOptions/ContinentOptions";
import WorldMap from "./components/WorldMap/WorldMap";
import { ContinentType } from "./countries";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [continent, setContinent] = useLocalStorage<ContinentType | null>("continent", null);

  return (
    <div className="app">
      <ContinentOptions setOption={(option: ContinentType) => setContinent(option)} />
      <WorldMap continent={continent} />
    </div>
  );
}

export default App;
