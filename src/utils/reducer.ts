import dfs from './dfs'
import type { Action, Cell, State } from './validators'

const reducer = (state: State, action: Action) => {
  console.log('state', state)
  console.log('action', action)
  const board = [...state.board]
  const cell = { ...action.payload }

  console.log('state.board === board', state.board === board)
  console.log(
    'JSON.stringify(state.board) === JSON.stringify(board)',
    JSON.stringify(state.board) === JSON.stringify(board)
  )
  console.log('action.payload === cell', action.payload === cell)
  console.log(
    'JSON.stringify(action.payload) === JSON.stringify(cell)',
    JSON.stringify(action.payload) === JSON.stringify(cell)
  )
  console.log('')
  switch (action.type) {
    case 'toggleFlag': {
      if (cell.shown) {
        return state
      }

      const y = cell.position[0]
      const x = cell.position[1]

      const boardCell = (board[y] as Cell[])[x] as Cell
      boardCell.flagged = !cell.flagged
      return { ...state, board }
    }
    case 'clickCell': {
      const cell = action.payload

      if (cell.flagged || cell.shown || !state.alive || !state.gameOn) {
        return state
      }
      // handle click cell, needs to be done
      // if (cell.mine) {

      // }

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
