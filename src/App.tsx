import React from "react";
import "./App.css";
import WorldMap from "./components/WorldMap/WorldMap";
import MapWrapper from "./components/MapWrapper/MapWrapper";

function App() {
  return (
    <>
      <MapWrapper>
        <WorldMap />
      </MapWrapper>
    </>
  );
}

export default App;
