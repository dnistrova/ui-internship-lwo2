export function abbreviated(str) {
  const splitName = str.split(' ');
  if (splitName.length >= 2) {
    for (let i = 1; i < splitName.length; i++) {
      splitName[i] = splitName[i].charAt(0) + '.';
    }
  }
  return splitName.join(' ');
}
