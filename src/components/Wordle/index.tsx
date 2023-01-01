import React from "react";
import { svgPaths } from "../../svg";
const getIndex = () => {
  const svgPathlength = 255;
  const date = new Date();
  const dateNum = date.getDay() * date.getMonth() * date.getFullYear();
  return dateNum % svgPathlength;
};
const Worldle = () => {
  const country = svgPaths[getIndex()];
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={"0 0 900 900"}
        height={900}
        width={900}
        id="map"
        className={`map`}
      >
        <path d={country.d} id={country.id} key={country.id} />
      </svg>
    </div>
  );
};

export default Worldle;
