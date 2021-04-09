import formatDataSize from './format-data-size';

export default function stringFormatBytesPerSecond(bps, format, asArray = false, culture = null) {
  if(bps === 0 || bps === null || isNaN(bps)) {
    return asArray ? ['0', 'B'] : '0';
  }

  //bytes, format, asArray = false, culture = null
  let res = formatDataSize(bps, format, asArray, culture);

  if(asArray) {
    res[1] += '/s';
  } else {
    res += '/s';
  }

  return res;
}
