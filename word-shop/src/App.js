import React, { useState } from 'react';
import './App.css';
import './mainStyle.css';
import data from './components/WordList/data.json';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import Card from './components/Cards/Cards';
import arrowPrev from './arrow-previous.png';
import arrowNext from './arrow-next.png';

function App(props) {
  const [currentCardIndex, setCurrentCardIndex] = useState(props.initialCardIndex || 0);
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

  return (
    <div className="App">
      <Header/>
      <div className='card__box'>
        <button onClick={handlePrevCard} className='btn-swtch'> <img src={arrowPrev} className='arrow' alt='arrow'></img> </button>
          <Card
            key={data[currentCardIndex].id}
            english={data[currentCardIndex].english}
            transcription={data[currentCardIndex].transcription}
            russian={data[currentCardIndex].russian}
          />
        <button onClick={handleNextCard} className='btn-swtch'><img src={arrowNext} className='arrow' alt='arrow'></img> </button>
      </div>
      <span className='card__count-text'>{`${currentCardIndex + 1}/${cardCount}`}</span>
      <main className='card-container'>
        <WordList/>
      </main>
      
      <Footer/>
    </div>
  );
}

App.defaultProps = {
  initialCardIndex: 0,
};

export default App;