export function formatWorkingHours(inputData) {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const sortedInput = inputData.sort(function(x, y) {
    const dayX = days.indexOf(x.day);
    const dayY = days.indexOf(y.day);

    if (dayX < dayY) {
      return -1;
    }
    if (dayX > dayY) {
      return 1;
    }
    return 0;
  });

  const mappedInput = sortedInput.map((element) => {
    return {
      toDayIndex: days.indexOf(element.day),
      fromDay: element.day,
      toDay: element.day,
      hours: element.from +' - '+ element.to,
    };
  });

  for (let i = 0; i < mappedInput.length - 1; i++) {
    let current = mappedInput[i];
    let next = mappedInput[i+1];

    if ((current.hours === next.hours) &&
        (current.toDayIndex + 1 === next.toDayIndex)) {
      current.toDay = next.toDay;
      current.toDayIndex = next.toDayIndex;
      mappedInput.splice(i+1, 1);
      i--;
    }
  }

  return mappedInput.map((element) => {
    if (element.fromDay === element.toDay) {
      return element.fromDay.toUpperCase() + ': ' + element.hours;
    } else {
      return element.fromDay.toUpperCase() + ' - ' +
            element.toDay.toUpperCase() + ': ' + element.hours;
    }
  });
}
