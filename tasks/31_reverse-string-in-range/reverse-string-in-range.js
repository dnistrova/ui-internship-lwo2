/* eslint linebreak-style: ["error", "windows"] */

export function reverseStringInRange(str, param) {
  let reversedString = str.split('')
      .slice(param[0], param[1]+1)
      .reverse()
      .join('');
  return (str.substr(0, param[0]) +
      reversedString + str.substr(param[1]+1, str.length));
}
