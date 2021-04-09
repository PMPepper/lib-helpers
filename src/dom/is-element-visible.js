import isElementHidden from './is-element-hidden';

export default function domIsElementVisible(elem) {
  return !isElementHidden(elem);
}
