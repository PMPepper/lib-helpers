//based on code from: https://gist.github.com/donmccurdy/6d073ce2c6f3951312dfa45da14a420f

import escapeRegExp from './escape-reg-exp';

/**
 * Creates a RegExp from the given string, converting asterisks to .* expressions,
 * and escaping all other characters.
 */
export default function stringWildcardToRegExp (s, caseSensitive = false, full = false) {
  const regexStr = s
    .split(/\*+/)
    .map(escapeRegExp)
    .join('.*?')
    .split(/\s+/)//treat any space in source search string as matching any whitespace
    .join('\\s+');

  return new RegExp(full ?
    `^${regexStr}$`
    :
    regexStr,
    caseSensitive ? undefined : 'i'
  );
}
