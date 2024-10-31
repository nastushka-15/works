import React, { useState, useEffect, useRef } from 'react';
import '../Cards/Cards.css';

function Card(props) {
    const { id, english, transcription, russian, tags, tags_json, boolean } = props;
    const [btnTranslate, setBtnTranslate] = useState(false);
    const btnRef = useRef(null); // Создаем ref для кнопки

    const handleChange = () => {
        setBtnTranslate(true);
    }

    // useEffect для установки фокуса на кнопку сразу после рендеринга
    useEffect(() => {
        if (!btnTranslate && btnRef.current) {
            btnRef.current.focus(); // Устанавливаем фокус на кнопку при первом рендере
        }
    }, [btnTranslate]); // Зависимость обеспечивает выполнение эффекта после изменения btnTranslate

    return (
        <div className="card">
            <h3>{english}</h3>
            <p>{transcription}</p>

            <div className="card__overlay">
                {!btnTranslate && (
                    <button 
                        ref={btnRef} // Привязываем реф к кнопке
                        className='btn__translate' 
                        onClick={() => { handleChange(); props.countWord(); }}>
                        Translate
                    </button>
                )}
                {btnTranslate && (
                    <h3>{russian}</h3>
                )}
            </div>
        </div>
    );
}

export default Card;