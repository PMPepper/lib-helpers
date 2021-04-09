import sortingAlphabeticalOnProp from './alphabetical-on-prop';

export default function sortingArrayAlphabeticalOnProp(arr, prop, locales = undefined, desc = false) {
  arr.sort(sortingAlphabeticalOnProp(prop, locales, desc));

  return arr;
}
