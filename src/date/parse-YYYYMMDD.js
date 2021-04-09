//Parses date in format YYYY-MM-DD into date object using local timezone

export default function dateParseYYYYMMDD(date) {
  const parts = date.split('-');

  return new Date(+parts[0], parts[1] - 1, +parts[2]);
}
