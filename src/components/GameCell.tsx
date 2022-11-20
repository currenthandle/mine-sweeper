import React from 'react'
import type { Cell } from '../utils/validators'

const GameCell = ({ cell }: { cell: Cell }): JSX.Element => {
  return (
    <div className='border border-black w-10 h-10 items-center justify-center	grid'>
      {cell.mine ? '*' : cell.numNeighborMines}
    </div>
  )
}
export default GameCell
