import GameBoardGrid from './GameBoardGrid'
import grid from '../../public/grid.json'
import { Board } from '../../utils/validators'

const MineSweeper = ({ initalBoard }: { initalBoard: Board }) => {
  return (
    <div>
      <GameBoardGrid></GameBoardGrid>
    </div>
  )
}
export default MineSweeper
