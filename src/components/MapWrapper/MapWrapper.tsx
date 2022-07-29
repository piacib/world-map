import React from "react";
import "./MapWrapper.css";
interface Props {
  children: JSX.Element;
}
const MapWrapper: React.FC<Props> = ({ children }) => {
  return <div className="map-container">{children}</div>;
};

export default MapWrapper;
