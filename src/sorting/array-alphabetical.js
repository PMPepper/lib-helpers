export default function sortingArrayAlphabetical(arr, locales = undefined, desc = false) {
  arr.sort(sortAlphabetical(locales, desc));

  return arr;
}

function sortAlphabetical(locales = undefined, desc = false) {
  let collator = (locales instanceof Intl.Collator) ? locales : new Intl.Collator(locales, {numeric: true, sensitivity: 'base'});

  return desc ? (a, b) => {
    return collator.compare(b, a);
  }
  :
  (a, b) => {
    return collator.compare(a, b);
  }
}
