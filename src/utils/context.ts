import { createContext } from 'react'
import type { Action, State } from './validators'

export const DispatchContext = createContext({} as React.Dispatch<Action>)

export const StateContext = createContext({} as State)
