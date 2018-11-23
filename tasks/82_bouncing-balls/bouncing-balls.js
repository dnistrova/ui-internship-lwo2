export function bouncingBall(h, bounce, window) {
  let count = 0;

  if (bounce >= 1 || bounce < 0 || window > h) {
    return -1;
  }
  while (h > window) {
    count += 2;
    h = h * bounce;
  }

  return count - 1;
}
