
/**
 * Takes one or more functions as arguments, and returns a function. When called,
 * the returned function will execute all the initially supplied arguments with
 * the supplied arguments, and if they all return a truthy response will reutrn
 * true, otherwise will return false 
 *
 * @module
 * @function funcAnd
 *
 * @param {...Function} Functions to execute
 * @returns {Function}  description
 */
export default function funcAnd() {
  const funcs = [];

  //build array of functions from arguments
  for(let i = 0, l = arguments.length; i < l; i++) {
    let arg = arguments[i];

    if(arg instanceof Function) {
      funcs.push(arg);
    }
  }

  const l = funcs.length;

  if(l === 1) {
    return funcs[0];
  }

  //
  return function(...args) {
    for(let i = 0; i < l; ++i) {
      if(!funcs[i](...arguments)) {
        return false;
      }
    }

    return true;
  }
}
