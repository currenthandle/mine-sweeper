import getValidNeighbors from './getValidNeighbors'
// import neighborTransforms from './neighborTranforms'

const dfs = (board, cell) => {
  console.log('in dfs')
  if (cell.shown) {
    return board
  }

  cell.shown = true

  const validNeighbors = getValidNeighbors(board, cell.position)
  validNeighbors.forEach((neighbor) => {
    return dfs(board, neighbor)
  })

  return board
}

export default dfs
