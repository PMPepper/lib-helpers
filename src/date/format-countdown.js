//Uses users local timezone

export default function dateFormatCountdown(date) {
  var days = Math.floor(date / (1000 * 60 * 60 * 24));
  var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((date % (1000 * 60)) / 1000);

  let value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if(days > 0 || hours > 0) {
    value = `${hours}:${value}`;

    if(days > 0) {
      value = `${days}d ${value}`
    }
  }

  return value;
}
