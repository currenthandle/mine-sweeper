import { type NextPage } from 'next'
import { useEffect, useReducer } from 'react'
import createGameBoard from '../../utils/createGameBoard'
import MineSweeper from '../components/MineSweeper'

const Home: NextPage = () => {
  const [state, reducer] = useReducer()
  useEffect(() => {
    const { gameBoard, minePositions } = createGameBoard()
  }, [])
  return (
    <div>
      <MineSweeper initalBoard={gameBoard}></MineSweeper>
    </div>
  )
}

export default Home
