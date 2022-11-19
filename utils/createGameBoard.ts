import { z } from 'zod'
import data from '../public/grid.json'

const jsonValidator = z.object({
  data: z.array(z.array(z.number())),
})
const gridValidator = z.array(z.array(z.number()))

// construct gameboard
function constructBoard(grid) {
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
