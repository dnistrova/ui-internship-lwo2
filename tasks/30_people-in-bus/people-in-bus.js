export function peopleInBus(busStops) {
  let totalPeople = 0;
  for (let i=0; i<busStops.length; i++) {
    let currentStop = busStops[i];
    let getOn = currentStop[0];
    let getOff = currentStop[1];

    totalPeople += getOn;
    totalPeople -= getOff;
  }
  return totalPeople;
}

