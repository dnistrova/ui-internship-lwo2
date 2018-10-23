export function minNumberToPrime(numbers) {
  let number = numbers.reduce(function(acc, val) {
    return acc + val;
  }, 0);

  function isPrime(value) {
    for (let x = 2; x < value; x++) {
      if (value % x === 0) {
        return false;
      }
    }
    return true;
  }

  let count = 0;
  if (isPrime(number)) return 0;

  while (!isPrime(number)) {
    number++;
    count++;
  }
  return count;
}
