
export default function objectMapToArray(object, callback) {
  if(!object) {
    return [];
  }

  return Object.keys(object).reduce((mappedArr, key) => {
    mappedArr.push(callback(object[key], key, object));

    return mappedArr;
  }, []);
}
