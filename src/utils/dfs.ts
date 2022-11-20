import getValidNeighbors from './getValidNeighbors'
import type { Board, Cell } from './validators'

const dfs = (board: Board, cell: Cell) => {
  // console.log('in dfs')
  if (cell.shown) {
    return board
  }

  cell.shown = true
  if (cell.numNeighborMines > 0) {
    return board
  }

  const validNeighbors = getValidNeighbors(board, cell.position)
  validNeighbors.forEach((neighbor) => {
    return dfs(board, (board[neighbor[0]] as Cell[])[neighbor[1]] as Cell)
  })

  return board
}

export default dfs
