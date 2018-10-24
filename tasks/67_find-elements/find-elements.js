export function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      num = arr[i];
      return num;
    }
  }
}
