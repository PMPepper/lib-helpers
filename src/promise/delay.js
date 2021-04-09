
//by = time in seconds
export default function promiseDelay(by) {
  if(by === 0) {
    return function(x) {
      return x;
    }
  }

  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), by * 1000));
  };
}
