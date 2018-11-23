export function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let result = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }
    let added = current + previous;
    previous = current;
    current = added;
  }

  return result;
}
