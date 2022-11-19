import GameBoardGrid from './GameBoardGrid'
import grid from '../../public/grid.json'
import { Board, Position } from '../../utils/validators'
import { useEffect, useReducer } from 'react'
import reducer from '../../utils/reducer'

const MineSweeper = ({
  initalBoard,
  minePositions,
}: {
  initalBoard: Board
  minePositions: Position[]
}) => {
  const [state, dispatch] = useReducer(reducer, {
    board: initalBoard,
    minePositions,
    flags: 0,
  })
  // useEffect(() => {
  //   dispatch({type: 'initalizeState'})
  // }, [])
  return (
    <div>
      <GameBoardGrid></GameBoardGrid>
    </div>
  )
}
export default MineSweeper
