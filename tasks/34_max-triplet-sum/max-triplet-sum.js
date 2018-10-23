export function maxTripletSum(arr) {
  /* eslint-disable-next-line */
  let sortedArr = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArr[0] + sortedArr[1] + sortedArr[2];
}
