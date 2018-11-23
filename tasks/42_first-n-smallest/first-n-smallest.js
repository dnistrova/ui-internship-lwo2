export function firstNSmallest(array, n) {
  const result = [];
  for (let i=0; i<array.length; i++) {
    let num = array[i];
    if (result.length < n) {
      result.push(num);
    } else {
      let max = Math.max(...result);
      if (num < max) {
        deleteItem(result, max);
        result.push(num);
      }
    }
  }
  return result;
}
function deleteItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
}
