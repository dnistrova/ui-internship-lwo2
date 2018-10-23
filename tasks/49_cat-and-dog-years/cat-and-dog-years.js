export const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  if (humanYears <= 0 || typeof humanYears !== 'number') {
    return [0, 0, 0];
  }
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  if (humanYears > 2) {
    catYears = (15+9) + (4 * (humanYears-2));
    dogYears = (15+9) + (5 * (humanYears-2));
  }
  return [humanYears, catYears, dogYears];
};
