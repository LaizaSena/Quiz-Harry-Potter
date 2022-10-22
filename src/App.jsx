import { useState } from 'react';

import Header from './components/Header/index';
import Quiz from './components/Quiz/quiz';
import Login from './components/Login/index';
import Footer from './components/Footer/index';

import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      {/* <Quiz /> */}
      <Login />
      <Footer />
    </div>
  )
}

export default App
