export function nbMonths(startPriceOld,
    startPriceNew, savingperMonth, percentLossByMonth) {
  let months = 0;
  let totalSaving = 0;
  let finalPriceNew = startPriceNew;
  let finalPriceOld = startPriceOld;
  let lossPercentage = percentLossByMonth;

  if (startPriceOld >= startPriceNew) {
    return [0, Math.floor(startPriceOld - startPriceNew)];
  }

  while ((totalSaving + finalPriceOld) < finalPriceNew) {
    months += 1;
    if (months % 2 === 0) {
      lossPercentage += 0.5;
    }
    totalSaving += savingperMonth;
    finalPriceOld -= finalPriceOld * (lossPercentage / 100);
    finalPriceNew -= finalPriceNew * (lossPercentage / 100);
  }
  return [months, Math.round(totalSaving + finalPriceOld - finalPriceNew)];
}
