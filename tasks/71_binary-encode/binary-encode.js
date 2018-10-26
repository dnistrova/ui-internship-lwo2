export function binaryEncode(str) {
  if (!str) {
    return '';
  }
  let text = str.split('');
  return text.map((el) => {
    el = el.charCodeAt(0).toString(2);
    while (el.length < 8) {
      el = '0' + el;
    }
    return el;
  }).join(' ');
}
