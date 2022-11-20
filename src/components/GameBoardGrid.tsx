import { Board } from '../../utils/validators'
import React from 'react'
import GameCell from './GameCell'

const GameBoardGrid = ({ board }: { board: Board }) => {
  return (
    <div className='grid grid-cols-3'>
      {board.map((row) => {
        return row.map((cell) => {
          console.log('cell', cell)
          return (
            <GameCell
              cell={cell}
              key={`${cell.position[0]} + ${cell.position[1]}`}
            ></GameCell>
          )
        })
      })}
    </div>
  )
}
export default GameBoardGrid
