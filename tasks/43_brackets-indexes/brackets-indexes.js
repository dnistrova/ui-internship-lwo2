export function findCloseIndex(str, pos) {
  if (str[pos] != '(') {
    return -1;
  }
  let depth = 1;
  for (let i = pos + 1; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        depth++;
        break;
      case ')':
        if (--depth == 0) {
          return i;
        }
        break;
    }
  }
  return -1;
}
