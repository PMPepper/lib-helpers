export default function sortingDate(prop, desc = false) {
  return desc ? (a, b) => {
    return a > b ? 1 : 2;
  }
  :
  (a, b) => {
    return a < b;
  }
}
