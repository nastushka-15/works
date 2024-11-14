import React, { useState, useContext } from 'react';
import Card from '../Cards/Cards';
import arrowPrev from '../Slider/arrow-previous.png';
import arrowNext from '../Slider/arrow-next.png';
// import data from '../../components/WordList/data.json';
import { WordsContext } from '../WordsContext/WordsContext';


function Slider() {
    const {data} = useContext(WordsContext);
    const [currentCardIndex, setCurrentCardIndex] = useState(data.initialCardIndex || 0);
    const cardCount = data.length;

const handleNextCard = () => {
    if (currentCardIndex === cardCount - 1) {
    setCurrentCardIndex(0);
    } else {
    setCurrentCardIndex(currentCardIndex + 1);
    }
};

const handlePrevCard = () => {
    if (currentCardIndex === 0) {
    setCurrentCardIndex(cardCount - 1);
    } else {
    setCurrentCardIndex(currentCardIndex - 1);
    }
};

const [wordTranslate, setWordTranslate] = useState(0)
    let countWord=()=>{
        setWordTranslate(wordTranslate+1)
        
    }

    return (
    <>
    <span className='card__count-text'>You translate {wordTranslate} new words</span>
    <div className='card__box'>
    
        <button onClick={handlePrevCard} className='btn-swtch'> <img src={arrowPrev} className='arrow' alt='arrow'></img> </button>
        <Card
            key={data[currentCardIndex].id}
            english={data[currentCardIndex].english}
            transcription={data[currentCardIndex].transcription}
            russian={data[currentCardIndex].russian}
            countWord = {countWord}
        />
        <button onClick={handleNextCard} className='btn-swtch'><img src={arrowNext} className='arrow' alt='arrow'></img> </button>
    </div>
    <span className='card__count-text'>{`${currentCardIndex + 1}/${cardCount}`}</span>
    </>
    );
}

Slider.defaultProps = {
initialCardIndex: 0,
};

export default Slider;