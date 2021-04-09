

export default function sortingDateOnProp(prop, desc = false) {
  return desc ? (a, b) => {
    return (((a[prop] instanceof Date) ? a[prop] : new Date(a[prop])) < ((b[prop] instanceof Date) ? b[prop] : new Date(b[prop]))) ? 1 : -1;
  }
  :
  (a, b) => {
    return (((a[prop] instanceof Date) ? a[prop] : new Date(a[prop])) > ((b[prop] instanceof Date) ? b[prop] : new Date(b[prop]))) ? 1 : -1;
  }
}
