import React, { useState } from "react";
import "./App.css";
import ContinentOptions from "./components/ContinentOptions/ContinentOptions";
import WorldMap from "./components/WorldMap/WorldMap";
import { ContinentType } from "./countries";
function App() {
  const [continent, setContinent] = useState<ContinentType | null>(null);

  return (
    <>
      <ContinentOptions
        setOption={(option: ContinentType) => setContinent(option)}
      />
      <WorldMap continent={continent} />
    </>
  );
}

export default App;
