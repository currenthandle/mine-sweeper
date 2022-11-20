import neighborTransforms from './neighborTranforms'
const dfs = (board, cell) => {
  if (cell.shown) {
    return board
  }

  cell.shown = true
}

export default dfs
