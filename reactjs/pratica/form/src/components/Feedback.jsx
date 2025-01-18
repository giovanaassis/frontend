/* eslint-disable react/prop-types */
import './Feedback.css';

const Feedback = ({ updateField }) => {
    return (
        <div className="feedback">
            <h2>Avaliação.</h2>

            <div className="inputs-container">
                <label htmlFor="feedback">Classifique sua experiência conosco</label>
                <input type="range" name="feedback" id="feedback" min='0' max='3' list='tickmarks' 
                onChange={e => updateField('feedback', e.target.value)}
                />
                <datalist id='tickmarks'>
                    <option value='0'/>
                    <option value='1'/>
                    <option value='2'/>
                    <option value='3'/>
                </datalist>
                <div className='feedback-labels'>
                    <span>Ruim</span>
                    <span>Normal</span>
                    <span>Bom</span>
                    <span>Excelente</span>
                </div>
            </div>
        </div>
    )
}

export default Feedback;