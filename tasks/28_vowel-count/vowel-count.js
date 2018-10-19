export function getVowelCount(str) {
  str = str.toLowerCase();
  let vowels = 'aeiou';
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
}
