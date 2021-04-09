import escapeRegExp from './escape-reg-exp';

export default function stringSplitAtFirst(str, searchStr) {
  return str.split(new Regex(escapeRegExp(searchStr)+'(.+)'))
}
