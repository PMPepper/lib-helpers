export default function sortingAlphabeticalOnProp(prop, locales = undefined, desc = false) {
  let collator = (locales instanceof Intl.Collator) ? locales : new Intl.Collator(locales, {numeric: true, sensitivity: 'base'});

  return desc ? (a, b) => {
    return collator.compare(b[prop], a[prop]);
  }
  :
  (a, b) => {
    return collator.compare(a[prop], b[prop]);
  }
}
