import React from 'react';
import './App.css';
import './mainStyle.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider/Slider';
import MissingPage from './components/MissingPage/MissingPage';
import { WordsContextProvider } from './components/WordsContext/WordsContext'; // Обратите внимание на импорт

function App(props) {
  return (
    <WordsContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Header />
          <Routes>
            <Route path='/' element={<WordList />} />
            <Route path='/play' element={<Slider />} />
            <Route path='*' element={<MissingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WordsContextProvider>
  );
}

export default App;