export default function objectMapKeys(obj, mapFunc) {
  const output = {};

  for(let i = 0, k = Object.keys(obj), l = k.length; i < l; ++i) {
    const key = k[i];
    const value = obj[key];

    output[mapFunc(key, value, obj)] = value;
  }

  return output;
}
