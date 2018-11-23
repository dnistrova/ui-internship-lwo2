export function addedChar(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr1[i]) {
      return (arr2[i]);
    }
    remove(arr1, arr1[i]);
    i++;
    continue;
  }
}

function remove(array, element) {
  const index = array.indexOf(element);
  if (index === -1) {
    return false;
  }
  array.splice(index, 1);
  return true;
}
