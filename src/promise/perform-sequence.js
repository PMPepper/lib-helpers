export default function promisePerformSequence(actionCreatorFuncs, mapActionFunc = null) {
  const promises = actionCreatorFuncs.map(item => {
    if(item instanceof Array) {//Item is an array of action creator funcs - call them all and group with a Promise.all
      return () => {
        return Promise.all(item.map(actionCreatorFunc => {
          return mapActionFunc ? mapActionFunc(actionCreatorFunc) : actionCreatorFunc();
        }));
      }
    } else {
      return () => {
        //item is the action creator func
        const result = mapActionFunc ? mapActionFunc(item) : item();

        //return promise with result
        return result instanceof Promise ? result : Promise.resolve(result);
      }
    }
  });

  return promiseSerial(promises);
}

const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))
