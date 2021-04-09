
/**
 * Test if the supplied array contains any duplicated values. Test is performed using the '===' operator,
 * so [{hello:'world'}, {hello:'world'}] will return false
 *
 * @module
 * @function arrayHasDuplicates
 *
 * @param  {Array} a The array to test
 * @returns {bool}   true if the array contains duplicates, otherwise false
 */
export default function arrayHasDuplicates(a) {
  return (new Set(a)).size !== a.length;
}
