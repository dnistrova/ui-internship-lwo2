export function addTogether() {
  const args = new Array(arguments.length);
  for (let i = 0; i < args.length; ++i) {
    /* eslint-disable-next-line */
    args[i] = arguments[i];
  }
  if (args.length == 2) {
    if (typeof args[0] !== 'number' || typeof args[1] !=='number' ) {
      return undefined;
    }
    return args[0]+args[1];
  }

  if (args.length == 1) {
    const a = args[0];
    if (typeof a !== 'number') {
      return undefined;
    } else {
      return function(b) {
        if (typeof b !=='number') {
          return undefined;
        } else {
          return a + b;
        }
      };
    }
  }
}
