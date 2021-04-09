export default function objectPick(object, keys) {
  return keys.reduce((outputObj, key) => {
    if(object.hasOwnProperty(key)) {
      outputObj[key] = object[key];
    }

    return outputObj;
  }, {});
}
