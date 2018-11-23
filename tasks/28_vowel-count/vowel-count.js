export function getVowelCount(str) {
  const newStr = str.toLowerCase();
  const vowels = 'aeiou';
  let vowelCount = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.indexOf(newStr[i]) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
}
