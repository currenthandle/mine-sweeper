import { type NextPage } from 'next'
import createGameBoard from '../../utils/createGameBoard'
import MineSweeper from '../components/MineSweeper'

const Home: NextPage = () => {
  const gameBoard = createGameBoard()
  return (
    <div>
      <MineSweeper initalBoard={gameBoard}></MineSweeper>
    </div>
  )
}

export default Home
