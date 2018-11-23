export function arrayPlusArray(arr1, arr2) {
  const result = [];
  let count = 0;
  let x = 0;

  while (count < arr1.length && count < arr2.length) {
    result.push(arr1[count] + arr2[count]);
    count++;
  }

  if (count === arr1.length) {
    for (x = count; x < arr2.length; x++) {
      result.push(arr2[x]);
    }
  } else {
    for (x = count; x < arr1.length; x++) {
      result.push(arr1[x]);
    }
  }
  return result;
}
