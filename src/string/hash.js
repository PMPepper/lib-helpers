import stringHashFnv32a from './hash-fnv32a';

/**
 * Generate a hash from the supplied string. Uses a non optimal method to generate larger hashes than the
 * HashFnv32 method
 *
 * @module
 * @function stringHash
 *
 * @param  {string} str       The string to hash
 * @param  {int} [bit = 128] The size of the generated hash. Larger reduces collision chance at the cost of longer processing time
 * @returns {string}           The generated hash
 */
export default function stringHash(str, bit = 128) {
  let output = '';

  for(let i = 0; i < (bit / 32); i++) {
    output += stringHashFnv32a(output + str, true);
  }

  return output;
}
