export function pairElement(str) {
  const arr = str.split('').map((el) => {
    const newArr = [];
    newArr.push(el);
    switch (el) {
      case 'G': newArr.push('C');
        break;
      case 'C': newArr.push('G');
        break;
      case 'A': newArr.push('T');
        break;
      case 'T': newArr.push('A');
    }
    return newArr;
  });

  return arr;
}
