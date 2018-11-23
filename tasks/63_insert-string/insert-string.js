export function insert(mainStr, str = '', position = 0) {
  if (str === '') {
    return mainStr;
  }
  return `${mainStr.slice(0, position)}${str}${mainStr.slice(position)}`;
}
