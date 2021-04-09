

/**
 * Get all unique values contained in this array
 *
 * @module
 * @function arrayUnique
 *
 * @param  {Array} a The input array
 * @returns {Array} Array of all unique values in the input array
 */
export default function arrayUnique(a) {
   return Array.from(new Set(a));
}
