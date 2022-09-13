import React, { useState } from "react";
import "./App.css";
import ContinentOptions from "./components/ContinentOptions/ContinentOptions";
import WorldMap from "./components/WorldMap/WorldMap";
import { ContinentType } from "./countries";
import { useLocalStorage } from "./hooks/useLocalStorage";
interface ContinentStorage {
  key: string;
  initialValue: ContinentType;
}
function App() {
  const [continent, setContinent] = useLocalStorage<ContinentType | null>(
    "continent",
    null
  );

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
