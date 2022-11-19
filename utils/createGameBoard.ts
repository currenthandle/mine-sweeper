import data from '../public/grid.json'

import {
  gridValidator,
  jsonValidator,
  NeighborTransform,
  Position,
  positionValidator,
  possiblePositionValidator,
} from './validators'
import type { Grid } from './validators'
import neighborTranforms from './neighborTranforms'
import isValidPosition from './isValidPosition'

// construct gameboard
function constructBoard(grid: Grid) {
  // console.log('grid', grid)
  // console.log('Array.isArray(grid)', Array.isArray(grid))
  console.log('neighborTranforms', neighborTranforms)

  grid.map((row, i) => {
    row.map((cell, j) => {
      const validNeighbors = neighborTranforms.reduce(
        (acc: Position[], neighborTransform: NeighborTransform): Position[] => {
          // console.log('acc', acc)
          const [dY, dX] = neighborTransform
          const nPos = possiblePositionValidator.parse([i + dY, j + dX])

          if (isValidPosition(grid, nPos)) {
            // console.log('nPos', nPos)
            return [...acc, nPos]
          }
          return acc
        },
        []
      )
      // return {}
      console.log('i, j', [i, j])
      console.log('validNeighbors', validNeighbors)
      console.log('')
    })
  })
}

// count neighboring mines

export default function createGameBoard() {
  jsonValidator.parse(data)
  const grid = gridValidator.parse(data.data)
  const gameBoard = constructBoard(grid)
}
