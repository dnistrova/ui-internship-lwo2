
export function findLongestWord(str) {
  const stringArray = str.split(' ');
  const longestWord = stringArray.reduce((a, b) => {
    if (b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  return longestWord.length;
}
