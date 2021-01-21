import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Projects from './Projects/Projects'

function Main() {
    return (
        <>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/about'><About /></Route>
                <Route path='/projects'><Projects /></Route>
                <Route path='/contact'><Contact /></Route>
            </Switch>
        </>
    )
}

export default Main
