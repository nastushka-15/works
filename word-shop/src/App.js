import React, { useEffect } from "react";
import './App.css';
import './mainStyle.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WordList from './components/WordList/WordList';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slider from './components/Slider/Slider';
import MissingPage from './components/MissingPage/MissingPage';
import { Provider } from 'mobx-react';
import wordsStore from './stores/wordsStore';



function App(props) {

  return (
    <Provider value={wordsStore}>
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
    </Provider>
  );
}

export default App;