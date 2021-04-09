

/**
 *
 * @module
 * @function arrayMake
 *
 * @param  {type} length description
 * @param  {type} value  description
 * @returns {type}        description
 */
export default function arrayMake(length, value) {
  const arr = new Array(length);

  for(let i = 0; i < length; i++) {
    arr[i] = value;
  }

  return arr;
}
