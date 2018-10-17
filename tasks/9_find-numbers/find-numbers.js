/* eslint "require-jsdoc": 0 */

export function getNumbers(str) {
  return str.match(/\d+/g).map(Number);
}

