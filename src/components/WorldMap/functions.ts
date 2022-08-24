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
