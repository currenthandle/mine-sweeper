import { type NextPage } from 'next'
import createGameBoard from '../../utils/createGameBoard'
import MineSweeper from '../components/MineSweeper'

const Home: NextPage = () => {
  const { gameBoard, minePositions } = createGameBoard()
  return (
    <div>
      <MineSweeper
        initalBoard={gameBoard}
        minePositions={minePositions}
      ></MineSweeper>
    </div>
  )
}

export default Home
