import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import './App.css';

const StyledApp = styled.div`
display: flex;
flex-direction: column;
align-items:center;
width: 50vw;
margin: 0 auto;
`

function App() {
  return (

    <Router>
      <StyledApp>
      <Header/>
      <Main />
      <Footer text='Made by Fadil, Nikolas, Eyad, Nikita' />   
      </StyledApp> 
    </Router>

  )
}

export default App;
