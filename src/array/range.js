//Doesn't deal with negative ranges, etc


/**
 * @module
 * @function arrayRange
 *
 * @param  {type} start description
 * @param  {type} end   description
 * @returns {type}       description
 */
export default function arrayRange(start, end) {
  const length = end - start;
  const arr = new Array(length);

  for(let i = 0; i < length; ++i) {
    arr[i] = start + i;
  }

  return arr;
}
