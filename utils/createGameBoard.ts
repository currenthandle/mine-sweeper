import data from '../public/grid.json'

import { gridValidator, jsonValidator } from './validators'
import type { Grid } from './validators'

// construct gameboard
function constructBoard(grid: Grid) {
  console.log('grid', grid)
  console.log('Array.isArray(grid)', Array.isArray(grid))

  grid.map((row, i) => {
    row.map((col, j) => {
      return {}
    })
  })
}

// count neighboring mines

export default function createGameBoard() {
  console.log('grid', data)
  jsonValidator.parse(data)
  const grid = gridValidator.parse(data.data)
  const gameBoard = constructBoard(grid)
}
