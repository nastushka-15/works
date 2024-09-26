import './App.css';
import './mainStyle.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='card-container'>
        <WordList/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
