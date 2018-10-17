/* eslint "require-jsdoc": 0 */

export function getNumbers(str) {
  str.match(/\d+/g).map(Number);
}

