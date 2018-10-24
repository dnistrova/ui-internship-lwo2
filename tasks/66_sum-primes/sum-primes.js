export function sumPrimes(num) {
  let result = 0;

  function getPrimes(max) {
    const arr = [];
    const primes = [];
    for (let i = 2; i <= max; ++i) {
      if (!arr[i]) {
        primes.push(i);
        for (let j = i << 1; j <= max; j += i) {
          arr[j] = true;
        }
      }
    }
    return primes;
  }

  const primes = getPrimes(num);
  for (let p = 0; p < primes.length; p++) {
    result += primes[p];
  }

  return result;
}
