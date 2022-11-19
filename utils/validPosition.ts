import type { Grid, Board, Position } from './validators'

export default function validPosition(board: Grid | Board, position: Position) {
  const [row, col] = position
  const numRows = board.length
  const numCols = board[0].length

  return row >= 0 && row < numRows && col >= 0 && col < numCols
}
