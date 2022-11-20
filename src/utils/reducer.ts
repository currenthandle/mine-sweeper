import dfs from './dfs'
import type { Action, Cell, State } from './validators'

const reducer = (state: State, action: Action) => {
  console.log('state', state)
  console.log('action', action)
  // console.log('')
  //const board = [...state.board]
  const board = state.board

  switch (action.type) {
    case 'toggleFlag': {
      const cell = action.payload
      // console.log('cell after actoion payload', cell)
      if (cell.shown) {
        return state
      }

      const y = cell.position[0]
      const x = cell.position[1]

      // ;((board[y] as Cell[])[x] as Cell).flagged
      const newCell = (state.board[y] as Cell[])[x] as Cell
      // console.log('x', x)
      // console.log('y', y)

      // console.log('newCell', newCell)
      newCell.flagged = !cell.flagged
      // console.log('cell!!!!!!', cell)
      // console.log('newCell222', newCell)
      // console.log('newCell === cell', newCell === cell)
      // console.log('typeof newCell', typeof newCell)
      // console.log('board after', state.board)
      const newBoard = [...state.board]
      // newBoard[y][x] = newCell
      console.log('newBoard[y][x]', newBoard[y][x])
      // newBoard[y][x] = true
      console.log('newBoard[y][x]', newBoard[y][x])

      // board[y][x] = newCell
      console.log('')
      return {
        ...state,
        board: newBoard,
      }
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
