//Uses users local timezone

export default function dateFormatYYYYMMDDHHmmUTC(date) {
  var d = (date instanceof Date ? date : new Date(date)),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = '' + d.getUTCFullYear(),
        hour = '' + d.getUTCHours(),
        minute = '' + d.getUTCMinutes();

  if(isNaN(d)) {
    return '';
  }

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;

  return `${year}-${month}-${day}T${hour}:${minute}`;
}
