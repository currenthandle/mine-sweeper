import React from 'react'
import { useContext } from 'react'
import Context from '../utils/context'
import type { Cell } from '../utils/validators'

const GameCell = ({ cell }: { cell: Cell }): JSX.Element => {
  const dispatch = useContext(Context)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    // if holding shift
    if (e.shiftKey) {
      dispatch({ type: 'toggleFlag', payload: cell })
    } else {
      dispatch({ type: 'clickCell', payload: cell })
    }
  }

  const getBackgroundColor = () => {
    if (cell.shown) {
      return 'bg-gray-300'
    } else {
      return 'bg-gray-500'
    }
  }
  const getInnerHtml = () => {
    if (cell.flagged) {
      return '🚩'
    }
    if (cell.shown) {
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
      onClick={handleClick}
    >
      {getInnerHtml()}
    </div>
  )
}
export default GameCell
