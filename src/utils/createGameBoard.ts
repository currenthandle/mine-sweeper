import data from '../../public/grid.json'

import {
  gridValidator,
  jsonValidator,
  positionValidator,
  possiblePositionValidator,
} from './validators'
import type { Grid, NeighborTransform, Position } from './validators'
import neighborTranforms from './neighborTranforms'
import isValidPosition from './isValidPosition'

// construct gameboard
function constructBoard(grid: Grid) {
  // can I do this with zod instead?
  const minePositions = [] as Position[]
  const gameBoard = grid.map((row, i) => {
    return row.map((cell, j) => {
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
      // count neighboring mines
      let numNeighborMines = 0
      validNeighbors.forEach((neighbor) => {
        const [y, x] = neighbor
        // console.log('neighbor', neighbor)
        if (grid[y][x] === 1) {
          numNeighborMines++
        }
      })

      const position = positionValidator.parse([i, j])
      const mine = grid[position[0]][position[1]] === 1
      // count number of mines in grid
      if (mine) {
        minePositions.push(position)
      }
      // return a cell
      const gameCell = {
        shown: false,
        flagged: false,
        mine,
        numNeighborMines,
        position: position,
      }
      return gameCell
    })
  })

  return { gameBoard, minePositions }
}

// count neighboring mines

export default function createGameBoard() {
  jsonValidator.parse(data)
  const grid = gridValidator.parse(data.data)
  const gameBoard = constructBoard(grid)
  console.log('gameBoard', gameBoard)
  return gameBoard
}
