export function uniqueInOrder(str) {
  let uniques = [];
  for (let i=0; i<str.length; i++) {
    let current = str[i];
    let next = str[i+1];
    if (current!==next) {
      uniques.push(current);
    }
  }
  return uniques;
}
