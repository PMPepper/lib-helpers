//Uses users local timezone

export default function dateFormatHHmm(date) {
  var d = (date instanceof Date ? date : new Date(date)),
        hour = '' + d.getHours(),
        minute = '' + d.getMinutes();

  if(isNaN(d)) {
    return '';
  }

  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;

  return `${hour}:${minute}`;
}
