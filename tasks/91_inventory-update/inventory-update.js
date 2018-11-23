export function updateInventory(arr1, arr2) {
  const currInv = [];
  const newInv = [];
  let index;

  arr1.map((item1) => {
    return arr2.map((item2) => {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0];
      }
    });
  });

  arr2.map((item) => {
    newInv.push(item[1]);
  });

  arr1.map((item) => {
    currInv.push(item[1]);
  });

  newInv.map((item) => {
    if (currInv.indexOf(item) === -1) {
      index = newInv.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  arr1.sort((currItem, nextItem) => {
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}
