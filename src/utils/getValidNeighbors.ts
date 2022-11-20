import neighborTranforms from './neighborTranforms'
import isValidPosition from './isValidPosition'
import type { Board, Grid, NeighborTransform, Position } from './validators'
import { possiblePositionValidator } from './validators'

export default function test(grid: Board | Grid, position: Position) {
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
