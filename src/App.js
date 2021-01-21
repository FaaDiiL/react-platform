import { BrowserRouter as Router } from 'react-router-dom'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

import './App.css';

function App() {
  return (

    <Router>
      <Header/>
      <Main />
      <Footer text='Made by Fadil, Nikolas, Eyad, Nikita' />    
    </Router>

  )
}

export default App;
