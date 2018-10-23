export function stringExpansion(str) {
  let finalStr = '';
  let num;
  const wordsArr = str.split('');

  for (let i = 0; i < wordsArr.length; i++) {
    if (isNaN(wordsArr[i])) {
      do {
        finalStr += wordsArr[i];
        num--;
      } while (num > 0); num;
    } else {
      num = wordsArr[i];
    }
  }
  return finalStr;
}
