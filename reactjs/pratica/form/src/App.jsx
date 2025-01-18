/* eslint-disable react/jsx-key */
import './App.css'
import { FaRegUser, FaPhone, FaHandHoldingHeart, FaMapPin } from "react-icons/fa";
import PersonalDataForm from "./components/PersonalDataForm"
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Complete from './components/Complete';
import { useState } from 'react';
import { useForm } from './hooks/useForm';

const template = {
  name: '',
  birthDate: '',
  tel: '',
  email: '',
  feedback: ''
}

function App() {


  const [ data, setData ] = useState(template);

  const updateField = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <PersonalDataForm data={data} updateField={updateField}/>,
    <Contact data={data} updateField={updateField}/>,
    <Feedback updateField={updateField}/>,
    <Complete data={data}/>
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep, isCompleted } = useForm(formComponents);


  return (
    <main>
      <div className='wrapper'>
        <header>
          <h1>Formulário</h1>
          <p>Siga os passos abaixo para concluir sua compra.</p>
        </header>

        <div className='body-container'>

          <section className='steps-container'>
            <div>
              <label>Dados Pessoais</label>
              <span className='steps-icons checked'>
                <FaRegUser />
              </span>
            </div>
            <div className={`bar ${currentStep >= 1 && 'checked'}`}></div>
            <div>
              <label>Contato</label>
              <span className={`steps-icons ${currentStep >= 1 && 'checked'}`}>
                <FaPhone />
              </span>
            </div>
            <div className={`bar ${currentStep >= 2 && 'checked'}`}></div>
            <div>
              <label>Avaliação</label>
              <span className={`steps-icons ${currentStep >= 2 && 'checked'}`}>
                <FaHandHoldingHeart />
              </span>
            </div>
            <div className={`bar ${currentStep >= 3 && 'checked'}`}></div>
            <div>
              <label>Completo</label>
              <span className={`steps-icons ${currentStep >= 3 && 'checked'}`}>
                <FaMapPin />
              </span>
            </div>
          </section>

          <section className='form-container'>
            <p>{`Passo ${currentStep + 1}/4`}</p>
            <form onSubmit={(e) => changeStep(currentStep, e)}>
              {currentComponent}

              <div className="actions">

                { !isCompleted && (

                <>  
                
                  {!isFirstStep && 
                    <button onClick={() => changeStep(currentStep - 1)} type='button'>Voltar</button> 
                  }
                  
                  
                   {!isLastStep ?
                    <button onClick={() => changeStep(currentStep + 1)} type='button'>Próximo</button>
                    :
                    <button onClick={() => changeStep(currentStep + 1)} type='submit'>Enviar</button>
                   }

                </>
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
