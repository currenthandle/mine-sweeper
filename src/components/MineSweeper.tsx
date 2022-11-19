import GameBoardGrid from './GameBoardGrid'
import type { Action, Board, Position, State } from '../../utils/validators'
import reducer from '../../utils/reducer'
import { useReducer } from 'react'
import React from 'react'
import Context from '../../utils/context'

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
    <Context.Provider value={dispatch}>
      <GameBoardGrid></GameBoardGrid>
    </Context.Provider>
  )
}
export default MineSweeper
