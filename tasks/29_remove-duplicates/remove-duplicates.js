export function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) == -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

