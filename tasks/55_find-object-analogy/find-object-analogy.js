export function whatIsInAName(collection, source) {
  let arr = [];
  const keys = Object.keys(source);

  arr = collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}
