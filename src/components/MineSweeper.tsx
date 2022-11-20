import GameBoardGrid from './GameBoardGrid'
import type { Board, Position } from '../utils/validators'
import reducer from '../utils/reducer'
import { useReducer } from 'react'
import React from 'react'
import { DispatchContext, StateContext } from '../utils/context'

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
    gameOn: true,
    alive: true,
  })
  // useEffect(() => {
  //   dispatch({type: 'initaligazeState'})
  // }, [])
  return (
    <div className='grid justify-center pt-10'>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <GameBoardGrid board={state.board}></GameBoardGrid>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  )
}
export default MineSweeper
