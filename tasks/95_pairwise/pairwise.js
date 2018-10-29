export function pairwise(arr, arg) {
  const pairArr = arr.slice();
  let sum = 0;

  for (let i = 0; i < pairArr.length; i++) {
    for (let j = i + 1; j < pairArr.length; j++) {
      if (pairArr[i] + pairArr[j] == arg) {
        sum += i + j;
        pairArr[i] = pairArr[j] = NaN;
      }
    }
  }
  return sum;
}
