export function numberToReversedArray(number) {
  number = number + '';
  let n = number.split('').reverse().map(Number);
  return n;
}
