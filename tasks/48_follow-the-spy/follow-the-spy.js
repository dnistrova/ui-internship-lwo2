export const followTheSpy = (routes) => {
  const trackedRoute = [];
  routes.map((currentPair) => {
    if (!routes.find((point) => point[1] === currentPair[0])) {
      trackedRoute.push(currentPair[0]);
      trackedRoute.push(currentPair[1]);
    }
  }).map(() => {
    routes.map((currentPair) => {
      currentPair[0] === trackedRoute[trackedRoute.length - 1]
      && trackedRoute.push(currentPair[1]);
    });
  });
  return trackedRoute.join(', ');
};
