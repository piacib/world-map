import { ContinentType, countriesByContinent } from "../../countries";

// num is length of output array
export const randomNumberOrder = (num: number): number[] => {
  const indexArray = [];
  const answer = [];
  for (let i = 0; i < num; i++) {
    indexArray.push(i);
  }
  while (indexArray.length) {
    const index = Math.floor(Math.random() * indexArray.length);
    answer.push(indexArray[index]);
    indexArray.splice(index, 1);
  }
  return answer;
};
type RandomEntriesNonRepeatingProps = {
  arr: string[];
  outputLength: number;
};
export const randomEntriesNonRepeating = ({
  arr,
  outputLength,
}: RandomEntriesNonRepeatingProps) => {
  if (outputLength > arr.length) {
    throw Error("cannot create array longer than array given");
  }
  let temp = arr;
  let idx = 0;
  let output = [];
  while (idx < outputLength) {
    const index = Math.floor(Math.random() * temp.length);
    output.push(temp[index]);
    temp.splice(index, 1);
    idx += 1;
  }
  if (output.length !== outputLength) {
    console.error("something went wrong with randomEntriesNonRepeating");
  }
  return output;
};

export const generateOptions = (
  continent: ContinentType | null,
  correctCountry: string | null,
): {
  name: string;
  isCorrect: boolean;
}[] => {
  if (!continent || !correctCountry) {
    return [];
  }
  // Number of choices in multiplechoice
  const order = randomNumberOrder(4);
  const tempArr = Object.keys(countriesByContinent[continent]);
  const correctCountryIndex = tempArr.indexOf(correctCountry);
  tempArr.splice(correctCountryIndex, 1);
  const incorrectOptions = randomEntriesNonRepeating({
    arr: tempArr,
    outputLength: 3,
  });
  const options = [correctCountry, ...incorrectOptions];
  const randomizedOptions = order.map((index) => options[index]);

  const optionsReturn = randomizedOptions.map((country) => ({
    name: country,
    isCorrect: country === correctCountry,
  }));
  return optionsReturn;
};
export const highlightCorrectEl = (correctCountry: string | null) => {
  if (correctCountry) {
    const correctEl = document.getElementById(correctCountry);
    if (correctEl) {
      console.log("list", correctEl.classList);
      correctEl.classList.add("correct");
    }
  }
};
export const unhighlightCorrectEl = (correctCountry: string | null) => {
  if (correctCountry) {
    const correctEl = document.getElementById(correctCountry);
    if (correctEl) {
      console.log("list", correctEl.classList);
      correctEl.classList.remove("correct");
    }
  }
};
export const colorOptionOnClick = (
  idx: number,
  isCorrect: boolean,
  selectedOption: null | number,
) => {
  return selectedOption === idx ? (isCorrect ? "correct" : "incorrect") : "";
};
