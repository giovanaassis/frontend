import './App.css'
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/Quiz'
import Questions from './components/Questions';
import GameOver from './components/GameOver';

function App() {

  const [ quizState, dispatch ] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' });
  }, [])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameState=== 'Start' && <Welcome />}
      {quizState.gameState === 'Playing' && <Questions />}
      {quizState.gameState === 'End' && <GameOver />}
    </div>
  )
}

export default App
