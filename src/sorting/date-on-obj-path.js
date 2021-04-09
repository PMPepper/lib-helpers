import resolveObjPath from '../object/resolve-path';


export default function sortingDateOnObjPath(path, desc = false) {
  return desc ? (a, b) => {
    const aVal = resolveObjPath(a, path);
    const bVal = resolveObjPath(b, path);

    return (((aVal instanceof Date) ? aVal : new Date(aVal)) < ((bVal instanceof Date) ? bVal : new Date(bVal))) ? 1 : -1;
  }
  :
  (a, b) => {
    const aVal = resolveObjPath(a, path);
    const bVal = resolveObjPath(b, path);

    return (((aVal instanceof Date) ? aVal : new Date(aVal)) > ((bVal instanceof Date) ? bVal : new Date(bVal))) ? 1 : -1;
  }
}
