import React from 'react'
import type { Cell } from '../utils/validators'

const GameCell = ({ cell }: { cell: Cell }): JSX.Element => {
  const getBackgroundColor = () => {
    if (cell.shown) {
      return 'bg-gray-300'
    } else {
      return 'bg-gray-500'
    }
  }
  const getInnerHtml = () => {
    // console.log('get html')
    if (!cell.shown) {
      console.log('shown')
      if (cell.mine) {
        return '💣'
      } else {
        return cell.numNeighborMines
      }
    } else {
      return ''
    }
  }
  return (
    <div
      className={`border border-black w-10 h-10 items-center justify-center	grid ${getBackgroundColor()}`}
    >
      {getInnerHtml()}
    </div>
  )
}
export default GameCell
