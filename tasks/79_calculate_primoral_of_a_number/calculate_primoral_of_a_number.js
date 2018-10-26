function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

export function numPrimorial(num) {
  let array = [];
  for (let i = 2; num !== array.length; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }
  return array.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  });
}
