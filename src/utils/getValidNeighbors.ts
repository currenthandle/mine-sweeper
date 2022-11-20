import neighborTranforms from './neighborTranforms'
import isValidPosition from './isValidPosition'
import type { Board, Grid, NeighborTransform, Position } from './validators'
import { possiblePositionValidator } from './validators'

export default function getValidNeighbors(
  grid: Board | Grid,
  position: Position
) {
  console.log('position000000000', position)
  const [i, j] = position
  const validNeighbors = neighborTranforms.reduce(
    (acc: Position[], neighborTransform: NeighborTransform): Position[] => {
      const [dY, dX] = neighborTransform
      const nPos = possiblePositionValidator.parse([i + dY, j + dX])

      if (isValidPosition(grid, nPos)) {
        return [...acc, nPos]
      }
      return acc
    },
    []
  )
  return validNeighbors
}
