import { type } from 'os'
import { z } from 'zod'

export const jsonValidator = z.object({
  data: z.array(z.array(z.number())),
})
export const cellValidator = z.object({
  shown: z.boolean(),
  flagged: z.boolean(),
  mine: z.boolean(),
  numNeighborMines: z.number().nonnegative(),
})
export const gridValidator = z.array(z.array(z.number()).min(1)).min(1)
export const boardValidator = z.array(z.array(cellValidator).min(1)).min(1)
export const positionValidator = z.tuple([
  z.number().nonnegative(),
  z.number().nonnegative(),
])
export const possiblePositionValidator = z.tuple([z.number(), z.number()])

export const neighborTransformValidator = z.tuple([
  z.number().min(-1).max(1),
  z.number().min(-1).max(1),
])
export const neighborTransformsValidator = z.array(neighborTransformValidator)
export type Cell = z.infer<typeof cellValidator>
export type Grid = z.infer<typeof gridValidator>
export type Board = z.infer<typeof boardValidator>
export type Position = z.infer<typeof positionValidator>
export type NeighborTransform = z.infer<typeof neighborTransformValidator>
