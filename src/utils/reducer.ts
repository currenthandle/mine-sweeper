import type { Action, State } from './validators'

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'clickCell': {
      console.log(' in click')
      const cell = action.payload
      if (cell.flagged) {
        return state
      }

      return state
    }
    default: {
      return state
    }
  }
}

export default reducer
