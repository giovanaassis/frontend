/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const Complete = ({ data }) => {

    const [ message, setMessage ] = useState('');

    
    const displayMessage = () => {
        console.log(typeof data.feedback)
        switch (data.feedback) {
            case '0':
                console.log('ruim')
                setMessage('Sinto muito pela sua insatisfação.')
            break;
            case '1':
                console.log('normal')
                setMessage('Muito obrigado pela sua avaliação.')
            break;
            case '2':
                console.log('bom')
                setMessage('Que possamos manter essa boa experiência com você!')
            break;
            case '3':
                console.log('excelente')
                setMessage('Ficamos felizes de te ter conosco!')
            break;
        }
    }

    useEffect(() => {
        displayMessage();
    })

    return (
        <div className="complete">
            <h2>Completo.</h2>
            <p>
                Tudo Pronto, {data.name}! <br />
                Muito obrigado por escolher a gente!
            </p>
            <p>
                {message}
            </p>
        </div>
    )
}

export default Complete;