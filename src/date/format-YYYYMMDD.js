import parseYYYYMMDD from './parse-YYYYMMDD';

//Uses users local timezone

export default function dateFormatYYYYMMDD(date) {
  var d = (date instanceof Date ? date : parseYYYYMMDD(date)),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = '' + d.getFullYear();

  if(isNaN(d)) {
    return '';
  }

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${year}-${month}-${day}`;
}
