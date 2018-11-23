export function destroyer(arr, ...args) {
  function filteredArr(arr) {
    return args.indexOf(arr) === -1;
  }
  return arr.filter(filteredArr);
}
