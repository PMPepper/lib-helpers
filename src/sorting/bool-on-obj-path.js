import resolveObjPath from '../object/resolve-path';

export default function sortingBoolOnObjPath(path, desc) {
  return desc ? (a, b) => {
    const aVal = resolveObjPath(a, path);
    const bVal = resolveObjPath(b, path);

    return (aVal === bVal) ? 0 : (aVal ? 1 : -1);
  }
  :
  (a, b) => {
    const aVal = resolveObjPath(a, path);
    const bVal = resolveObjPath(b, path);

    return (aVal === bVal) ? 0 : bVal ? 1 : -1;
  }
}
