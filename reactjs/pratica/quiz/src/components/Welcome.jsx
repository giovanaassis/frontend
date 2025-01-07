import { useContext } from 'react';
import { QuizContext } from '../context/Quiz';
import Quiz from '../img/quiz.svg';
import './Welcome.css';


const Welcome = () => {

    const [quizState, dispatch] = useContext(QuizContext);

    console.log(quizState);

    return (
        <div id="welcome">
            <h2>Seja Bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Iniciar</button>
            <img src={Quiz} />
        </div>
    )
}

export default Welcome;