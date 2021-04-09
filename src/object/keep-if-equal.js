import shallowCompare from './shallow-compare';


export default function objectKeepIfEqual(current, altered) {
  return shallowCompare(current, altered) ?
    current
    :
    altered;
}
