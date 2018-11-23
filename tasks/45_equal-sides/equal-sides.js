export function findEqualIndex(arr) {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}
