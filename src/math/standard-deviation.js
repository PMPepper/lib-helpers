import mean from './mean';


export default function mathStandardDeviation(...values) {
  if(values.length === 1 && (values[0] instanceof Array)) {
    values = values[0];
  }

  const avg = mean(values);
  let diffSquareSum = 0;

  for(let i = 0; i < values.length; i++) {
    let diff = values[i] - avg;
    let sqrDiff = diff * diff;
    diffSquareSum += sqrDiff;
  }

  return Math.sqrt(diffSquareSum / values.length)
}
