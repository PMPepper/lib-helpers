export default function objectForEach(obj, forEachFunc) {
  for(let i = 0, k = Object.keys(obj), l = k.length; i < l; ++i) {
    const key = k[i];
    const value = obj[key];

    forEachFunc(value, key, obj);
  }

  return obj;
}
