/* eslint-disable-next-line */
String.prototype.camelCase = function() {
  return this.split(' ').map((e) => e[0].toUpperCase() + e.substr(1)).join('');
};
