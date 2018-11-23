export function sumAll(arr) {
  const lower = Math.min(arr[0], arr[1]);
  const upper = Math.max(arr[0], arr[1]);

  let total = 0;

  for (let i = lower; i <= upper; i++) {
    total += i;
  }

  return total;
}
