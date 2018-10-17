/* eslint "require-jsdoc": 0 */

export function isBoolean(value) {
  if (typeof(value) == typeof(true)) {
    return true;
  } else {
    return false;
  }
}
