import React, { useState } from 'react';
import Card from '../Cards/Cards';
import arrowPrev from '../Slider/arrow-previous.png';
import arrowNext from '../Slider/arrow-next.png';
// import data from '../../components/WordList/data.json';
import wordsStore from '../../stores/wordsStore';
import { observer } from "mobx-react";


const Slider = observer(() => {
    const cardCount = wordsStore.cardCount; // Используем геттер для получения количества карточек

    const handleNextCard = () => {
        wordsStore.nextCard();
    };

    const handlePrevCard = () => {
        wordsStore.prevCard();
    };

    return (
        <>
            <span className='card__count-text'>You translate {wordsStore.wordTranslate} new words</span>
            <div className='card__box'>
                <button onClick={handlePrevCard} className='btn-swtch'>
                    <img src={arrowPrev} className='arrow' alt='arrow' />
                </button>
                {wordsStore.currentCard && ( // Проверяем, что currentCard существует
                    <Card
                        key={wordsStore.currentCard.id}
                        english={wordsStore.currentCard.english}
                        transcription={wordsStore.currentCard.transcription}
                        russian={wordsStore.currentCard.russian}
                        countWord={() => wordsStore.incrementWordTranslate()} // Передача функции
                    />
                )}
                <button onClick={handleNextCard} className='btn-swtch'>
                    <img src={arrowNext} className='arrow' alt='arrow' />
                </button>
            </div>
            <span className='card__count-text'>{`${wordsStore.currentCardIndex + 1}/${cardCount}`}</span>
        </>
    );
});

Slider.defaultProps = {
    initialCardIndex: 0,
};

export default Slider;