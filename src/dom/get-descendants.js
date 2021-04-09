export default function domGetDescendants(elem) {
  return Array.prototype.slice.call(elem.querySelectorAll('*'));
}
