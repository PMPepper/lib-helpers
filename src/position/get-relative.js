
const AVAILABLE_POSITIONS = Object.freeze({
  top: {
    relativePosition: {x: 0.5, y: 0},
    placedPosition: {x: 0.5, y: 1}
  },
  right: {
    relativePosition: {x: 1, y: 0.5},
    placedPosition: {x: 0, y: 0.5}
  },
  bottom: {
    relativePosition: {x: 0.5, y: 1},
    placedPosition: {x: 0.5, y: 0}
  },
  left: {
    relativePosition: {x: 0, y: 0.5},
    placedPosition: {x: 1, y: 0.5}
  }
});

const ALL_POSITIONS = Object.freeze(['top', 'right', 'bottom', 'left']);

//The function
export default function positionGetRelative(
  positionedItemDimensions,
  relativeItemDimensions,
  bounds,
  positions = ALL_POSITIONS
) {
  let bestPosition = null;
  let bestPositionName = null;
  let bestPositionArea = -1;

  positions.forEach(positionName => {
    const position = AVAILABLE_POSITIONS[positionName];

    if(!position) {
      return;//skip unknown positions
    }

    const potentialPosition = move(positionedItemDimensions, relativeItemDimensions, position);
    const positionArea = getUnionArea(bounds, potentialPosition);

    //Pick the position which has the most visible area, tiebreaking on which is first in the list of possible positions
    if(positionArea > bestPositionArea) {
      bestPosition = potentialPosition;
      bestPositionName = positionName;
      bestPositionArea = positionArea;
    }
  });//end forEach positions

  if(!bestPosition) {
    debugger;
    throw new Error('No valid positions supplied');

  }

  return [bestPositionName, bestPosition.x, bestPosition.y];
}

function move(positionedItemDimensions, relativeItemDimensions, position) {
  const x = (relativeItemDimensions.x + (relativeItemDimensions.width * position.relativePosition.x)) - (positionedItemDimensions.width * position.placedPosition.x);
  const y = (relativeItemDimensions.y + (relativeItemDimensions.height * position.relativePosition.y)) - (positionedItemDimensions.height * position.placedPosition.y);

  return {
    x,
    y,
    width: relativeItemDimensions.width,
    height: relativeItemDimensions.height,
    top: y,
    right: x + relativeItemDimensions.width,
    bottom: y + relativeItemDimensions.height,
    left: x,
  }
}

function getUnionArea(bounds, dimensions) {
  const unionLeft = Math.max(bounds.left, dimensions.left);
  const unionTop = Math.max(bounds.top, dimensions.top);

  const unionRight = Math.min(bounds.right, dimensions.right)
  const unionBottom = Math.min(bounds.bottom, dimensions.bottom)

  return unionRight > unionLeft && unionBottom > unionTop ?
    (unionRight - unionLeft) * (unionBottom - unionTop)
    :
    0;
}

//Assign constants to method to make them available to consumers
positionGetRelative.ALL_POSITIONS = ALL_POSITIONS;
positionGetRelative.AVAILABLE_POSITIONS = AVAILABLE_POSITIONS;
