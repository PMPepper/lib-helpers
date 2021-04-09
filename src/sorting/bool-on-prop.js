export default function sortingBoolOnProp(prop, desc) {
  return desc ? (a, b) => {
    return (a[prop] === b[prop]) ? 0 : (a[prop] ? 1 : -1);
  }
  :
  (a, b) => {
    return (a[prop] === b[prop]) ? 0 : b[prop] ? 1 : -1;
  }
}
