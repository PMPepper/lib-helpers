export default function sortingNumeric(arr, desc = false) {
  arr.sort(desc ? (a,b) => ((+b)-(+a)) : (a,b) => ((+a)-(+b)))

  return arr;
}
