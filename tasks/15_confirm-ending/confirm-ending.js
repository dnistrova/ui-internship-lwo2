export function confirmEnding(string, arg) {
  if (string.substr(-arg.length) === arg) {
    return true;
  } else {
    return false;
  }
}
