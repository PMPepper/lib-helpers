import getDescendants from './get-descendants';
import isFocusable from './is-focusable';


export default function domGetFocusableElements(container) {
  return getDescendants(container).filter(isFocusable);
}
