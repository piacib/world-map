import { SelectedCountryType } from "../WorldMap/types";

export const ViewBoxGen = ({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}): string => {
  return `${x} ${y} ${width} ${height}`;
};
export const viewBoxObjGen = (
  str: string,
): {
  x: number;
  y: number;
  width: number;
  height: number;
} => {
  let arr = str.split(" ");
  if (arr.length >= 4) {
    return {
      x: Number.parseInt(arr[0]),
      y: Number.parseInt(arr[1]),
      width: Number.parseInt(arr[2]),
      height: Number.parseInt(arr[3]),
    };
  }
  return {
    x: 0,
    y: 0,
    width: 800,
    height: 800,
  };
};
export const scrollToNewCountry = (newSelectedCountry: SelectedCountryType | null) => {
  if (!newSelectedCountry) {
    return;
  }
  const svg = document.getElementById("map");
  if (svg instanceof SVGGraphicsElement) {
    const currentVBAtr = svg.getAttribute("viewBox");
    if (!currentVBAtr) {
      return;
    }
    const currentVB = viewBoxObjGen(currentVBAtr);

    const element = document.getElementById(newSelectedCountry.id);
    if (element instanceof SVGPathElement) {
      const newVB = element.getBBox();
      console.log(currentVB, newVB);
      if (currentVB) {
        while (currentVB.x > newVB.x) {
          currentVB.x -= 10;
          svg.setAttribute("viewBox", ViewBoxGen(currentVB));
        }
      }
    }
  }
};
export const center = (startFactor = 100) => {
  const highlightElement = document.getElementsByClassName("highlight")[0];
  if (highlightElement instanceof SVGPathElement) {
    const bBox = highlightElement.getBBox();
    const viewBox = {
      x: 0,
      y: 0,
      width: 800,
      height: 800,
    };
    console.log(
      `${bBox.x + bBox.width / 2 - viewBox.width / 2} ${
        bBox.y + bBox.height / 2 - viewBox.height / 2
      } ${viewBox.width} ${viewBox.height}`,
    );
    document
      .getElementById("map")
      ?.setAttribute(
        "viewBox",
        `${bBox.x + bBox.width / 2 - viewBox.width / 2} ${
          bBox.y + bBox.height / 2 - viewBox.height / 2
        } ${viewBox.width} ${viewBox.height}`,
      );
  }
};
