
/**
 * Count how many times a given value appears in an array
 *
 * @module
 * @function arrayCountValue
 *
 * @param  {Array} array The array to check
 * @param  {*} what  The value to check for
 * @returns {integer}       The number of times the supplied value is found in array
 */
export default function arrayCountValue(array, what) {
  var count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === what) {
        count++;
    }
  }
  return count;
}
