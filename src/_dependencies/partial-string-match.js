import localeIndexOf from '@/helpers/string/locale-index-of';

export default function partialStringMatch(full, partial, langCode = null, localeOptions = {sensitivity: 'accent'}) {
  return (langCode ?
    localeIndexOf(full, partial, langCode, localeOptions)
    :
    full.indexOf(partial)) !== -1;
}
