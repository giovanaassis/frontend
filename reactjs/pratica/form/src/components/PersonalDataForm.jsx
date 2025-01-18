/* eslint-disable react/prop-types */
import './PersonalDataForm.css';

const PersonalDataForm = ({ data, updateField }) => {

    return (
        <div className='personal-data'>
            <h2>Dados Pessoais.</h2>

            <div className='inputs-container'>
                <label htmlFor="name">Escreva seu nome</label>
                <input type="text" name="name" id='name' value={data.name || ''}
                onChange={(e) => updateField('name', e.target.value)}/>
            </div>
            <div className='inputs-container'>
                <label htmlFor="name">Data de nascimento</label>
                <input type="text" name="birth-date" id='birth-date' placeholder='dd/mm/aa'  value={data.birthDate}
                onChange={(e) => updateField('birthDate', e.target.value)}/>
            </div>
        </div>
    )
}

export default PersonalDataForm;