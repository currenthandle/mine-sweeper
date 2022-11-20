import dfs from './dfs'
import type { Action, State } from './validators'

const reducer = (state: State, action: Action) => {
  console.log('state', state)
  console.log('action', action)
  // console.log('')
  const board = [...state.board]

  switch (action.type) {
    case 'toggleFlag': {
      const cell = action.payload
      console.log('cell after actoion payload', cell)
      if (cell.shown) {
        return state
      }

      // cell.flagged = !cell.flagged
      // console.log(
      //   'board[cell.position[0]][cell.position[1]]',
      //   board[cell.position[0]][cell.position[1]]
      // )
      // console.log('cell before toggle', cell.flagged)
      // console.log(
      //   'board[cell.position[0]][cell.position[1]]',
      //   board[cell.position[0]][cell.position[1]]
      // )
      console.log(
        'board[cell.position[0]][cell.position[1]].flagged',
        board[cell.position[0]][cell.position[1].flagged]
      )
      let newFlagVal
      if (cell.flagged) {
        newFlagVal = false
      } else {
        console.log('ELSE')
        newFlagVal = true
      }
      console.log('newFlagVal', newFlagVal)
      cell.flagged = !cell.flagged
      board[cell.position[0]][cell.position[1]]?.flagged = newFlagVal
      // cell.flagged = !cell.flagged
      // const isCellFlagged = cell.flagged
      // board[cell.position[0]][cell.position[1]].flagged = !isCellFlagged
      // console.log('cell.flagged', cell)
      // console.log('============================')
      // console.log('board', board)
      const newState = { ...state, board }
      console.log('newState', newState)
      return newState
      // return state
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
