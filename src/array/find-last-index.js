
/**
 * Finds the last index that the supplied test func returns true for in the supplied array
 *
 * @module
 * @function arrayFindLastIndex
 *
 * @param  {Array} arr        The array to search
 * @param  {Function} searchFunc Function to be called on each item in the array in reverse order until it returns true
 * @returns {integer}            The last index in the supplied array that the searchFunc tested true for. -1 if not found.
 */
export default function arrayFindLastIndex(arr, searchFunc) {
  for(let i = arr.length - 1; i > -1; --i) {
    if(searchFunc(arr[i])) {
      return i;
    }
  }

  return -1;
}
