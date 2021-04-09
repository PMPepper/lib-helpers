export default function objectOmit(object, keys) {
  if(!object) {
    return null;
  }

  const keysSet = new Set(keys);

  return Object.keys(object).reduce((result, key) => {
    if(!keysSet.has(key)) {
       result[key] = object[key];
    }
    return result;
  }, {});
}
