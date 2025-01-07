/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import { QuizContext } from '../context/Quiz'
import './Questions.css';
import Options from './Options';

const Questions = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const options = quizState.questions[quizState.currentQuestion].options;

    const selectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option}
        })
    }
    

    return (
        <div id='question'>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id='options_container'>
                { options.map( (option) => {
                    return <Options 
                    option={option} 
                    answer={currentQuestion.answer} 
                    selectOption={() => selectOption(option)}/>
                } ) }
            </div>
            { quizState.answerSelected && 
                <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
            }
        </div>
    )
}

export default Questions;