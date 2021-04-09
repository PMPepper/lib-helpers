export default function mathClamp(num, min = -Number.MAX_VALUE, max = Number.MAX_VALUE) {
  return num <= min ? min : num >= max ? max : num;
}
