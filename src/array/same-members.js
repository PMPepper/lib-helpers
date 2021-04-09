import arrayContainsAll from './contains-all';

//

/**
 * Do these two arrays contain all the same data (non-order specific)
 * 
 * @module
 * @function arraySameMembers
 *
 * @param  {Array} arr1 First array
 * @param  {Array} arr2 Second array
 * @returns {bool} True if both arrays contain the same values, otherwise false
 */
export default function arraySameMembers (arr1, arr2) {
  return arrayContainsAll(arr1, arr2) && arrayContainsAll(arr2, arr1);
}
