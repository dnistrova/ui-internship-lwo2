export function getAverage(arr) {
  let sum = arr.reduce((previous, current) => current += previous);
  let avg = parseInt(sum / arr.length);
  return avg;
}
