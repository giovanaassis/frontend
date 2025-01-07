/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './Options.css';
import { QuizContext } from '../context/Quiz';

const Options = ({ option, answer, selectOption }) => {

    const [quizState] = useContext(QuizContext);

    return (
        <p className={`option ${
            quizState.answerSelected && answer === option ? 'correct' : ''} 
            ${quizState.answerSelected && answer !== option ? 'wrong' : ''}`}
        
        onClick={() => selectOption()}>{option}</p>
    )
}

export default Options;