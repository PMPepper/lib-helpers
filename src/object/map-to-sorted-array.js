export default function objectMapToSortedArray(obj, mapFunc, sortFunc, filterFunc = null, sortOnMapped = false) {
  const mapped = {};
  const keys = [];

  for(let i = 0, k = Object.keys(obj), l = k.length; i < l; ++i) {
    const key = k[i];
    const value = obj[key];

    if(filterFunc && !filterFunc(value, key, obj)) {
      continue;
    }

    keys.push(key);
    mapped[key] = mapFunc ?
      mapFunc(value, key, obj)
      :
      value;
  }

  if(sortFunc) {
    const mappedSortFunc = sortOnMapped ?
      (a, b) => {
        return sortFunc(mapped[a], mapped[b]);
      }
      :
      (a, b) => {
        return sortFunc(obj[a], obj[b]);
      };

    keys.sort(mappedSortFunc);
  }

  return keys.map(key => (mapped[key]));
}
