export function arrayLeaders(arr) {
  const newArr = [];
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    let currentNum = 0;
    for (let j = i+1; j < size; j++) {
      if (i !== size-1) {
        currentNum += arr[j];
      } else {
        currentNum = arr[i];
      }
    }
    if (arr[i] > currentNum) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
