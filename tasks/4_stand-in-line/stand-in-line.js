/* eslint "require-jsdoc": 0 */

export function nextInLine(arr, item) {
  arr.push(item);
  let firstItem = arr.shift(arr);
  return firstItem;
}
