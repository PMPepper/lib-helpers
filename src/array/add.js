
/**
 * Adds array(s) to the end of another, in place
 *
 * @module array
 * @function arrayAdd
 *
 * @param  {Array} arr     The array to append items to - will be modified
 * @param  {...Array} One or more Arrays to append to the array in he first argument
 * @returns {Array}         The modified array
 */
export default function arrayAdd(arr, ...arrs) {
  arrs.forEach(addArr => {
    addArr.forEach(value => {
      arr.push(value);
    })
  })

  return arr;//just to make code easier (method chaining, etc)
}
