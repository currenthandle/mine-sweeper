import getValidNeighbors from './getValidNeighbors'
// import neighborTransforms from './neighborTranforms'

const dfs = (board, cell) => {
  console.log('in dfs')
  if (cell.shown) {
    return board
  }

  cell.shown = true
  console.log('')
  console.log('before************', cell)

  const validNeighbors = getValidNeighbors(board, cell.position)
  validNeighbors.forEach((neighbor) => {
    console.log('neighbor', neighbor)
    return dfs(board, board[neighbor[0]][neighbor[1]])
  })

  return board
}

export default dfs
