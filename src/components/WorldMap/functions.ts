import { ContinentType } from "../../countries";
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
export const centerCountry = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
export const transformVars: {
  [K in ContinentType]: { scale: number; x: number; y: number };
} = {
  "North America": {
    scale: 2.5,
    x: 864,
    y: 105,
  },
  Africa: {
    scale: 3,
    x: -66,
    y: -408,
  },
  Europe: {
    scale: 3.5,
    x: 0,
    y: 156,
  },
  "South America": {
    scale: 3,
    x: 624,
    y: -636,
  },
  Oceania: {
    scale: 3,
    x: -1077,
    y: -510,
  },
  Asia: {
    scale: 2.1,
    x: -507,
    y: -18,
  },
};
