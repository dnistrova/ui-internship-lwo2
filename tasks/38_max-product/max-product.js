export function maxProduct(arr) {
  let maxProduct = arr[0] * arr[1];
  for (let i=1; i<arr.length; i++) {
    if (maxProduct<arr[i] * arr[i+1]) {
      maxProduct = arr[i] * arr[i+1];
    }
  }
  return maxProduct;
}
