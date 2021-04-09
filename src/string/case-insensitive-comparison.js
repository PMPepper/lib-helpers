export default function stringCaseInsensitiveComparison(str1, str2, locale = null) {
  return str1.localeCompare(str2, locale, {sensitivity: 'accent'}) === 0;
}
