import type { Action, State } from './validators'

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'click': {
      return state
    }
    default: {
      return state
    }
  }
}

export default reducer
