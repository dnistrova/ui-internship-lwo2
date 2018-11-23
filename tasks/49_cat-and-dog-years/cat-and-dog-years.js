export const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;
  switch (humanYears) {
    case 0:
      catYears = dogYears = 0;
      return [humanYears, catYears, dogYears];
    case 1:
      catYears = dogYears = 15;
      return [humanYears, catYears, dogYears];
    case 2:
      catYears = dogYears = 15 + 9;
      return [humanYears, catYears, dogYears];
    default:
      catYears = (15+9) + (4 * (humanYears-2));
      dogYears = (15+9) + (5 * (humanYears-2));
      return [humanYears, catYears, dogYears];
  }
};
