import { Board } from '../../utils/validators'
import React from 'react'

const GameBoardGrid = ({ board }: { board: Board }) => {
  return (
    <div className='grid grid-cols-3'>
      {board.map((row) => {
        return row.map((cell) => {
          console.log('cell', cell)
          return (
            <div key={`${cell.position[0]} + ${cell.position[1]}`}>Cell</div>
          )
        })
      })}
    </div>
  )
}
export default GameBoardGrid
