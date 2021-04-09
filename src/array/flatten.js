import add from './add';


/**
 * Combines all supplied arguments into an array, and recursively flattens any supplied arrays
 *
 * @module
 * @function arrayFlatten
 *
 * @example
 * arrayFlatten(1,2,[3,4,[5,6]]);// will return [1,2,3,4,5,6]
 *
 * @param {...*} - Values to be concatenated and flattened
 *
 * @returns {Array} a single flat array
 */
export default function arrayFlatten() {
  const output = [];

  for(let i = 0; i < arguments.length; i++) {
    let value = arguments[i];

    if(value instanceof Array) {
      add(output, arrayFlatten.apply(null, value))
    } else {
      output.push(value);
    }
  }

  return output;
}
