export function insert(mainStr, str, position) {
  if (typeof(position) == 'undefined') {
    position = 0;
  }
  if (typeof(str) == 'undefined') {
    str = '';
  }
  return mainStr.slice(0, position) + str + mainStr.slice(position);
}
