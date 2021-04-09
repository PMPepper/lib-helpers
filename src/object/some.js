export default function objectSome(object, testFunc) {
  for(let key in object) {
    if(testFunc(object[key], key, object)) {
      return true;
    }
  }

  return false;
}

// I think this is slower - should probably test at some point
// export default function objSome(object, testFunc) {
//   for(let i = 0, keys = Object.keys(object), key = null; i < keys.length; i++) {
//     key = keys[i];
//
//     if(testFunc(object[key], key, object)) {
//       return true;
//     }
//   }
//
//   return false;
// }
