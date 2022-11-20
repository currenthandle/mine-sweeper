import dfs from './dfs'
import type { Action, State } from './validators'

const reducer = (state: State, action: Action) => {
  console.log('state', state)
  console.log('action', action)
  console.log('')

  switch (action.type) {
    case 'clickCell': {
      const cell = action.payload

      const board = [...state.board]

      if (cell.flagged || cell.shown || !state.alive || !state.gameOn) {
        return state
      }
      if (cell.numNeighborMines === 0 && !cell.mine) {
        console.log('cell cell cell', cell)
        const newBoard = dfs(board, cell)
        return {
          ...state,
          board: newBoard,
        }
      } else {
        board[cell.position[0]][cell.position[1]].shown = true
        return {
          ...state,
          board,
        }
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
