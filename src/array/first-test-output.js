


/**
 * Search an array and perform a calculation on the found value in a single step
 *
 * @module
 * @function arrayFirstTestOutput
 *
 * @param  {Array} arr   The array to search
 * @param  {Function} test Function to be called on each item in the array in order until it does not return false
 * @returns {*}      The first non-false value returned by the test function, or null if all values returned false
 */
export default function arrayFirstTestOutput(arr, test) {
  for(let i = 0, l = arr.length; i < l; i++) {
    const result = test(arr[i]);

    if(result !== false) {
      return result;
    }
  }

  return null;
}
