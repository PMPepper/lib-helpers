export default function objectMap(obj, mapFunc) {
  const output = {};

  for(let i = 0, k = Object.keys(obj), l = k.length; i < l; ++i) {
    const key = k[i];
    const value = obj[key];

    output[key] = mapFunc(value, key, obj);
  }

  return output;
}
