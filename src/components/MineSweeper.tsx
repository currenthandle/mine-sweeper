import GameBoardGrid from './GameBoardGrid'
import type { Action, Board, Position, State } from '../../utils/validators'
import reducer from '../../utils/reducer'
import { useReducer } from 'react'

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
  //   dispatch({type: 'initaligazeState'})
  // }, [])
  return (
    <div>
      <GameBoardGrid></GameBoardGrid>
    </div>
  )
}
export default MineSweeper
