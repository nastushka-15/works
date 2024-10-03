import React, {useState} from 'react';
import '../Cards/Cards.css';

function Card(props) {
    const {id, english, transcription, russian, tags, tags_json, boolean} = props;
    const [btnTranslate, setBtnTranslate] = useState(false);

    const handleChange =() => {
        setBtnTranslate(true);
    }

    
    return (
        <div className="card">
            <h3>{english}</h3>
            <p>{transcription}</p>

            <div className="card__overlay">
                {!btnTranslate && (
                    <button className='btn__translate' onClick={handleChange}>Translate</button>
                )}
                {btnTranslate && (
                    <h3>{russian}</h3>
                )}
            </div>
        </div>
    );
}

export default Card;