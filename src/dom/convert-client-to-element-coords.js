export default function domConvertClientToElementCoords(element, {x, y}) {
  const rect = element.getBoundingClientRect();

  //TODO take into account borders etc?

  return {
    x: x - rect.left,
    y: y - rect.top
  };
}
