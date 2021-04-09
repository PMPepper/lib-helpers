

//switches keys and value of an object
export default function objectFlip(obj) {
  const output = {};

  for(let i = 0, k = Object.keys(obj), l = k.length; i < l; ++i) {
    const key = k[i];
    const value = obj[key];

    output[value] = key;
  }


  return output;
}
