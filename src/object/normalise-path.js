export default function objectNormalisePath(path) {
  return typeof(path) === 'number' ?
    [path.toString()]
    :
    typeof(path) === 'string' ?
      path
        .replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
        .replace(/^\./, '')           // strip a leading dot
        .split('.')
      :
      path;
}
