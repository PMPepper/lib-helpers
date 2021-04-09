import sortNumeric from './numeric';

export default function sortingKeysByNumericKeys(obj, desc=false) {
  return sortNumeric(Object.keys(obj).map(key => +key).filter(key => !isNaN(key)), desc);
}
