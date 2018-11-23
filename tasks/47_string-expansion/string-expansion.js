export function stringExpansion(str) {
  let finalStr = '';
  let num;
  const wordsArr = str.split('');

  for (let i = 0; i < wordsArr.length; i++) {
    if (isNaN(wordsArr[i])) {
      finalStr += repeat(wordsArr[i], num);
    } else {
      num = wordsArr[i];
    }
  }
  return finalStr;
}
function repeat(letter, count) {
  let finalResult = '';
  do {
    finalResult += letter;
    count--;
  } while (count > 0);
  return finalResult;
}
