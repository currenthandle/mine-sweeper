import { createContext } from 'react'
import type { Action, State } from './validators'

const Context = createContext({} as React.Dispatch<Action>)
export default Context

// export const StateContext = createContext({} as State)
