import { type } from 'os'
import { z } from 'zod'

export const cellValidator = z.object({
  shown: z.boolean(),
  flagged: z.boolean(),
  mine: z.boolean(),
  numNeighbors: z.optional(z.number().nonnegative()),
})
export const jsonValidator = z.object({
  data: z.array(z.array(z.number())),
})
export const gridValidator = z.array(z.array(z.number()).min(1)).min(1)
export const boardValidator = z.array(z.array(cellValidator).min(1)).min(1)
export const positionValidator = z.tuple([
  z.number().nonnegative(),
  z.number().nonnegative(),
])

export type Cell = z.infer<typeof cellValidator>
export type Grid = z.infer<typeof gridValidator>
export type Board = z.infer<typeof boardValidator>
export type Position = z.infer<typeof positionValidator>
