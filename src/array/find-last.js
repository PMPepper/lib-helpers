/**
 * Finds the last value that the supplied test func returns true for in the supplied array
 *
 * @module
 * @function arrayFindLast
 *
 * @param  {Array} arr        The array to search
 * @param  {Function} searchFunc Function to be called on each item in the array in reverse order until it returns true
 * @returns {*}            The last value in the supplied array that the searchFunc tested true for. Null if not found
 */
export default function arrayFindLast(arr, searchFunc) {
  for(let i = arr.length - 1; i > -1; --i) {
    if(searchFunc(arr[i])) {
      return arr[i];
    }
  }

  return null;
}
