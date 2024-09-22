
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import words from './words';
import Card from './components/Cards/Cards';
function App() {
  return (
    <div className="App">
      <Header/>
      <main className='card-container'>
      {words.map((card) =>(
        <Card
        key={card.id}
        english={card.english}
        transcription={card.transcription}
        russian={card.russian}
        />
      ))}
    </main>
      <Footer/>
    </div>
  );
}

export default App;
