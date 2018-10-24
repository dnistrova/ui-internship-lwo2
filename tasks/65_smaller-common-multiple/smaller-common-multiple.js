export function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  const newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  let quotient = 0;
  let loop = 1;
  let n;

  do {
    quotient = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quotient % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);

  return quotient;
}
