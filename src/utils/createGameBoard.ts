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
import getValidNeighbors from './getValidNeighbors'

// construct gameboard
function constructBoard(grid: Grid) {
  // can I do this with zod instead?
  const minePositions = [] as Position[]
  const gameBoard = grid.map((row, i) => {
    return row.map((cell, j) => {
      const validNeighbors = getValidNeighbors(grid, [i, j])
      let numNeighborMines = 0
      //  validNeighbors.forEach((neighbor) => {
      for (const neighbor of validNeighbors) {
        const [y, x] = neighbor
        // console.log('neighbor', neighbor)
        if (grid[y][x] === 1) {
          numNeighborMines++
        }
      }

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
  return gameBoard
}
