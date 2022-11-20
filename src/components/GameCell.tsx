import React from 'react'
import type { Cell } from '../utils/validators'

const GameCell = ({ cell }: { cell: Cell }): JSX.Element => {
  const getBackgroundColor = (shown) => {
    if (shown) {
      return 'bg-gray-300'
    } else {
      return 'bg-gray-500'
    }
  }
  return (
    <div
      className={`border border-black w-10 h-10 items-center justify-center	grid ${getBackgroundColor(
        cell.shown
      )}`}
    >
      {cell.mine ? '*' : cell.numNeighborMines}
    </div>
  )
}
export default GameCell
