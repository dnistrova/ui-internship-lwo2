function canBePresentedAsSquareDifferences(n) {
  return n % 2 === 1 || n % 4 === 0;
}

function calc(maxN) {
  const result = [];
  let prev = 0;

  result.push(0);

  for (let i = 1; i <= maxN; i++) {
    if (canBePresentedAsSquareDifferences(i)) {
      prev++;
    }

    result.push(prev);
  }

  return result;
}

export function squares(n) {
  const arr = calc(n);

  return arr[n];
}
