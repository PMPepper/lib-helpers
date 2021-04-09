export default function mathMean(...values) {
  if(values.length === 1 && (values[0] instanceof Array)) {
    values = values[0];
  }

  var sum = values.reduce((sum, value) => (
    sum + value
  ), 0);

  return sum / values.length;
}
