/**
 * @typedef ArrayChanges
 * @type {object}
 * @property {Array} added - The values present in set2 that were not in set1
 * @property {Array} removed - The values that were present in set1, but not in set2
 * @property {Array} same - The values that were present in both set1 and set2
 */

 /**
  * @typedef SetChanges
  * @type {object}
  * @property {Set} added - The values present in set2 that were not in set1
  * @property {Set} removed - The values that were present in set1, but not in set2
  * @property {Set} same - The values that were present in both set1 and set2
  */


/**
 * compares the contents of two arrays (or sets, can be mixed freely), and returns an object describing changes in their values. This does not take order into account, so [1,2,3] and [2,1,3] would be considered unchanged.
 *
 * @module
 * @function arrayChanges
 *
 * @param  {Array|Set} set1           The initial Array or Set
 * @param  {Array|Set} set2           The Array or Set to compare it with
 * @param  {bool} [asSet=false]       return the set of added/removed and same as a Set instead of the default Array?
 * @returns {ArrayChanges|SetChanges} ArrayChanges or SetChanges describing the changes, depending on the value of asSet
 */

export default function arrayChanges(set1, set2, asSet = false) {
  const removed = [];
  const same = [];

  //if set1 is not a set, make it into a set
  if(!(set1 instanceof Set)) {
    set1 = new Set(set1);
  }

  //always clone set2, so we can modify it without side-effects
  set2 = new Set(set2);

  //iterate though set1
  set1.forEach(value => {
    if(set2.has(value)) {
      same.push(value);
      set2.delete(value);//remove values in set2 that are present in set1, this way at the end set2 will only contain added items
    } else {
      removed.push(value);
    }
  })

  //finally, return results
  if(asSet) {
    return {
      added: set2,
      removed: new Set(removed),
      same: new Set(same)
    }
  }

  return {
    added: Array.from(set2),
    removed,
    same
  }
}
