import { ContinentToCssType } from "./types";

export const getRandomKey = (obj: Object) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * (keys.length - 1))];
};
export const executeScroll = (element: HTMLElement | null) => {
  if (element === null) {
    return;
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
export const colorElement = (element: HTMLElement | null) => {
  if (element === null) {
    return;
  }
  element.classList.add("highlight");
};
export const removeColorFromElement = (element: HTMLElement | null) => {
  if (element === null) {
    return;
  }
  element.classList.remove("highlight");
};
const largeCountries = [""];
const largeCountryCheck = (country: string) => {
  if (largeCountries.includes(country)) {
    return true;
  }
  return false;
};

const zoomer = (country: string | null): string => {
  if (!country) {
    return "";
  }
  if (largeCountryCheck(country)) {
    return "large_country_zoom_in";
  }
  return "startZoom";
};
export const continentToCss: ContinentToCssType = {
  "North America": "north_america",
  "South America": "south_america",
  Europe: "europe",
  Africa: "africa",
  Asia: "asia",
  Oceania: "oceania",
};
