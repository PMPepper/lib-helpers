import resolveObjPath from '../object/resolve-path';


export default function sortingNumericOnObjPath(path, desc = false) {
  return desc ? (a, b) => {
    return resolveObjPath(b, path) - resolveObjPath(a, path);
  }
  :
  (a, b) => {
    return resolveObjPath(a, path) - resolveObjPath(b, path);
  }
}
