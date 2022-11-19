import data from '../public/grid.json'

import {
  gridValidator,
  jsonValidator,
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
  // console.log('neighborTranforms', neighborTranforms)

  grid.map((row, i) => {
    row.map((cell, j) => {
      const validNeighbors = neighborTranforms.reduce(
        (acc, neighborTransform) => {
          // console.log('acc', acc)
          // console.log('neighborTransform', neighborTransform)
          // console.log('[i,j]', [i, j])
          const [dY, dX] = neighborTransform
          const nPos = possiblePositionValidator.parse([i + dY, j + dX])
          // const nPos = [i + dY, j + dX]
          // console.log('nPos', nPos)
          // console.log('')

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
