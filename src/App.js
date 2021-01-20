import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from './Home/Home'
import Projects from './Projects/Projects'

import './App.css';

function App() {
  return (

    <Router>
      <Header/>
      <Switch>
        

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

      </Switch> 
      <Footer text='Made by Fadil, Nikolas, Eyad, Nikita' />      
    </Router>

  )
}

export default App;
