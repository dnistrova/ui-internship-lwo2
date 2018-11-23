export function rot13Encoder(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      arr.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }

  return arr.join('');
}
