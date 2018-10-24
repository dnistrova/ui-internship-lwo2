/* eslint "require-jsdoc": 0 */

export class SimTime {
  constructor() {
    this.speed = 1;
    this.actualTime = 0;
    this.simTime = 0;
  }

  update(time) {
    if (this.time > time) {
      /* eslint-disable-next-line */
      throw 'can\'t go back in time';
    }

    this.simTime += (time - this.actualTime) * this.speed;
    this.actualTime = time;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  get() {
    return this.simTime;
  }
}
