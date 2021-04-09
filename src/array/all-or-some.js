

/**
 * A combination of Array.every and Array.some methods
 *
 * @module
 * @function arrayAllOrSome
 *
 * @param  {type} arr      The array to test
 * @param  {type} testFunc the test func to execute for each member of arr
 * @returns {bool|null}    true if all true, null if some are true, or false if none are true
 */
export default function arrayAllOrSome(arr, testFunc) {//
  let hasTrue = false;
  let hasFalse = false;

  for(let i = 0; i < arr.length; i++) {
    const val = !!testFunc(arr[i]);

    if((val && hasFalse) || (!val && hasTrue)) {
      return null;//if there is both a true and false item, stop here and return null
    }

    if(val) {
      hasTrue = true;
    } else {
      hasFalse = true;
    }
  }

  //will only reach here if all values are of the same type
  return hasTrue;
}
