import data from '../../public/grid.json'

import { gridValidator, jsonValidator, positionValidator } from './validators'
import type { Grid, Position } from './validators'
import getValidNeighbors from './getValidNeighbors'

// construct gameboard
function constructBoard(grid: Grid) {
  // can I do this with zod instead?
  const minePositions = [] as Position[]
  const gameBoard = grid.map((row, i) => {
    const _row = row.map((cell, j) => {
      const validNeighbors = getValidNeighbors(grid, [i, j])
      let numNeighborMines = 0
      //  validNeighbors.forEach((neighbor) => {
      for (const neighbor of validNeighbors) {
        const [y, x] = neighbor
        const gridCell = (grid[y] as number[])[x] as number
        if (gridCell === 1) {
          numNeighborMines++
        }
      }

      const position = positionValidator.parse([i, j])
      const gridCell = (grid[position[0]] as number[])[position[1]] as number
      const mine = gridCell === 1
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
    return _row
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
