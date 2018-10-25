export function binaryDecode(str) {
  if (!str) {
    str = '';
  }
  let binString = '';

  str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  return binString;
}
