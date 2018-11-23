export function translatePigLatin(str) {
  const wordArray = str.split('');
  const vowels = 'aeiou';
  let consonant;
  for (let i = 0; i < wordArray.length; i++) {
    if (vowels.includes(wordArray[0])) {
      str = wordArray.join('');
      if (i === 0) {
        str = str + 'way';
        return str;
      } else {
        str = str + 'ay';
        return str;
      }
    } else {
      consonant = wordArray.shift();
      wordArray.push(consonant);
    }
  }
  return str;
}
