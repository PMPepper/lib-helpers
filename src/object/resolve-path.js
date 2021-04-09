import objectNormalisePath from './normalise-path';

export default function objectResolvePath(obj, path) {
  return objectNormalisePath(path).reduce(function(prev, curr) {
    return prev ? prev[curr] : undefined
  }, obj);
}
