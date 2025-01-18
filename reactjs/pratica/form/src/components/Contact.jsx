/* eslint-disable react/prop-types */

const Contact = ({ data, updateField }) => {
    return (
        <div className="contact">
            <h2>Contato.</h2>

            <div className='inputs-container'>
                <label htmlFor="tel">Escreva seu número de telefone</label>
                <input type="text" value={data.tel} onChange={e => updateField('tel', e.target.value)}/>
            </div>
            <div className='inputs-container'>
                <label htmlFor="email">Escreva seu e-mail</label>
                <input type="email" value={data.email} onChange={e => updateField('email', e.target.value)}/>
            </div>
        </div>
    )
}

export default Contact;