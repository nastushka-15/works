import './App.css';
import './mainStyle.css';
import data from './components/WordList/data.json';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import Card from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='card__box'>
        {data.map((card) =>(
          <Card
          key={card.id}
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
          />
        ))}
        </div>
      <main className='card-container'>
        <WordList/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
