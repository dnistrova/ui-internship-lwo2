export function deepClone(obj) {
  let copy = obj;
  if (obj && typeof obj === 'object') {
    copy = Object.prototype.toString
        .call(obj) === '[object Array]' ? [] : {};
    /* eslint-disable-next-line */
    for (let i in obj) {
      copy[i] = deepClone(obj[i]);
    }
  }
  return copy;
}
