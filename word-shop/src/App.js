import React, { useState } from 'react';
import './App.css';
import './mainStyle.css';
import data from './components/WordList/data.json';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import Card from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import Logo from './components/NavBar/Logo/Logo';
import PlayButton from './components/NavBar/PlayButton/PlayButton';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slider from './components/Slider/Slider';
import MissingPage from './components/MissingPage/MissingPage';


function App(props) {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Header/>
        <Routes>
          <Route path='/' element={<WordList/>}/>
          <Route path='/play' element={<Slider/>}/>
          <Route path='*' element={<MissingPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;