//Uses users local timezone

export default function dateFormatYYYYMMDDUTC(date) {
  var d = (date instanceof Date ? date : new Date(date)),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = '' + d.getUTCFullYear();

  if(isNaN(d)) {
    return '';
  }

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${year}-${month}-${day}`;
}
