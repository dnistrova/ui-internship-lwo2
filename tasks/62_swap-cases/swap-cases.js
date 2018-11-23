export function swapCases(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
}
