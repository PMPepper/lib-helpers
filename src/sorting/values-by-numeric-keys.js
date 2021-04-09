import sortNumeric from './numeric';

export default function sortingValuesByNumericKeys(obj, desc=false) {
  return sortNumeric(Object.keys(obj).filter((key) => (!isNaN(+key))), desc).map((key)=>obj[key]);
}
