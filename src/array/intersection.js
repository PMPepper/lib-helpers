/**
 * Get the set of values that are in both arrays
 *
 * @module
 * @function arrayIntersection
 *
 * @param  {Array} a First array
 * @param  {Array} b Second Array
 * @returns {Array}   All values that are present in both a and b
 */
export default function arrayIntersection(a, b) {
  var setB = new Set(b);
  return [...new Set(a)].filter(x => setB.has(x));
}
