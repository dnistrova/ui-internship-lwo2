export function removeFalsyValues(arr) {
  return arr.filter(function(value) {
    if (value) {
      return (value);
    }
  });
}
