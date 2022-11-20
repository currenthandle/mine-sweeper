import { createContext } from 'react'
import type { Action } from './validators'

const Context = createContext({} as React.Dispatch<Action>)
export default Context

// export const StateContext = createContext({} as State)
