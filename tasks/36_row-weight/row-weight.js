/* eslint linebreak-style: ["error", "windows"] */

export function rowWeights(arr) {
  let team1 = arr.filter((x, i) => i%2 == 0).reduce((a, item) => a + item, 0);
  let team2 = arr.filter((x, i) => i%2 != 0).reduce((a, item) => a + item, 0);

  return [team1, team2];
}
