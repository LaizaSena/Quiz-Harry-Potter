import './App.css'

import Header from './components/Header/index';
import Quiz from './components/Quiz/quiz';
import Login from './components/Login/index';
import Footer from './components/Footer/index';

function App() {

  return (
    <div className="App">
      <Header />
      <Quiz />
      {/* <Login /> */}
      <Footer />
    </div>
  )
}

export default App
