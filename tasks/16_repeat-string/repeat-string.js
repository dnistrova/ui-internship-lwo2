export function repeatStringNumTimes(string, num) {
  if (num < 0) return '';
  if (num === 1) return string;
  else return string + repeatStringNumTimes(string, num - 1);
}
