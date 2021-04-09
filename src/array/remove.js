//
//
//
/**
 * returns a copy of the input array, minus the supplied values
 *
 * @module
 * @function arrayRemove
 *
 * @param  {Array} arr - The input array
 * @param  {...*} - List of values to remove
 * @returns {Array} Copy of the input arr, minus teh supplies values
 */

export default function arrayRemove(arr, ...items) {
  const filtered = arr.filter(value => {
    return !items.includes(value)
  });

  if(filtered.length === arr.length) {
    return arr;
  }

  return filtered;
}
