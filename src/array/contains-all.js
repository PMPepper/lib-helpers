//
//

/**
 * Does array 2 contain all the same values as array 1 (ignores sequence of values).
 *
 * @example
 * arrayContainsAll([1,2,3], [1,2]);//true
 * arrayContainsAll([1,2], [1,2,3]);//false
 *
 * @module
 * @function arrayContainsAll
 *
 * @param  {Array} arr1 The initial arra
 * @param  {Array} arr2 The array to compare against
 * @returns {bool} true if every item in arr2 is present in arr1, otherwise false
 */
export default function arrayContainsAll (arr1, arr2) {
  return arr2.every(arr2Item => arr1.includes(arr2Item));
}
