import type { Board } from '../utils/validators'
import React from 'react'
import GameCell from './GameCell'

const GameBoardGrid = ({ board }: { board: Board }) => {
  return (
    <div className='grid grid-cols-3'>
      {console.log('board from Board', board)}
      {board.map((row) => {
        return row.map((cell) => {
          console.log('cell from board', cell)
          return (
            <GameCell
              key={`${cell.position[0]} + ${cell.position[1]}`}
              cell={cell}
            ></GameCell>
          )
        })
      })}
    </div>
  )
}
export default GameBoardGrid
