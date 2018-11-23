/* eslint "require-jsdoc": 0 */

export function factorialize(num) {
  if (num === 0) {
    return 1;
  } else if (num <= 1) {
    return num;
  } else {
    return num * factorialize(num - 1);
  }
}
