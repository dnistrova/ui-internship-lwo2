export function runningAverage() {
  let total = 0;
  let timesCalled = 0;
  return function(num) {
    timesCalled++;
    total += num;
    return Math.round(total / timesCalled * 100) /100;
  };
}
