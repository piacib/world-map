import React from "react";
import "./App.css";
import ContinentOptions from "./components/ContinentOptions/ContinentOptions";
import Settings from "./components/settings/Settings";
import WorldMap from "./components/WorldMap/WorldMap";
import { ContinentType } from "./countries";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [continent, setContinent] = useLocalStorage<ContinentType | null>("continent", null);

  return (
    <div className="app">
      <div className="header_container">
        <ContinentOptions setOption={(option: ContinentType) => setContinent(option)} />
        <Settings />
      </div>
      <WorldMap continent={continent} />
    </div>
  );
}

export default App;
