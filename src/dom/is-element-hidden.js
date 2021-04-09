export default function domIsElementHidden(elem) {
  return !( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
}
