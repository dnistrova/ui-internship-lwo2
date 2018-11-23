export function sym(...arg) {
  const arrArgs = arg;

  function compareArrays(arr1, arr2) {
    const arr1red = arr1.reduce(function(collect, current) {
      if (!arr2.includes(current) && !collect.includes(current)) {
        collect.push(current);
      }
      return collect;
    }, []);

    const arr2red = arr2.reduce(function(collect, current) {
      if (!arr1.includes(current) && !collect.includes(current)) {
        collect.push(current);
      }
      return collect;
    }, []);

    return arr1red.concat(arr2red);
  }

  return arrArgs.reduce(compareArrays).sort();
}
