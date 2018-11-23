export function unpackArray(arr) {
  const flattenedArray = [];

  const flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      /* eslint-disable-next-line */
      for (let a in arg) {
        flatten(arg[a]);
      }
    }
  };

  arr.forEach(flatten);
  return flattenedArray;
}
