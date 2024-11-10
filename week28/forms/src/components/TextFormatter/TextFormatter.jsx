import React, { useState } from 'react';
import '../TextFormatter/TextFormatter.css';
const TextFormatter = () => {
const [inputValue, setInputValue] = useState('');
const [formattedText, setFormattedText] = useState('');

const handleChange = (e) => {
setInputValue(e.target.value);
};

const handleSubmit = () => {
// Форматируем текст: делаем все буквы заглавными
setFormattedText(inputValue.toUpperCase());
setInputValue(''); // Очищаем поле ввода после отправки
};

return (
<div className='container'>
    <input
    type="text"
    value={inputValue}
    onChange={handleChange}
    placeholder="Введите текст"
    />
    <button onClick={handleSubmit}>Добавить</button>
    {formattedText && (
    <p className='FormattedText'>
        {formattedText}
    </p>
    )}
</div>
);
};

export default TextFormatter;