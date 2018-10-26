function isPrime(element, index, array) {
  const start = 2;
  while (start <= Math.sqrt(index)) {
    if (index % start++ < 1) {
      return false;
    }
  }
  return index > 1;
}

function findPrimes(array) {
  let primes = [];
  let onePrime = [];
  for (let i = 0; i < array.length; i++) {
    let onePrime = array.filter(isPrime);
    return onePrime;
  }
  return primes.push(onePrime);
}

export function sumPrimeIndexedElements(array) {
  if (array.length == 0 || array == undefined) {
    return 0;
  }
  let sum = findPrimes(array).reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return sum;
}
