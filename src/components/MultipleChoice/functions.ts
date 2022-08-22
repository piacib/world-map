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
