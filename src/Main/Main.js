<<<<<<< HEAD
import React, { useState } from 'react'

import AddListItem from '../AddListItem/AddListItem'
import List from '../List/List'

function Main() {
     
     const [inputVal,setInputVal] = useState('Default Todo')
     const [liVal,setLiVal] = useState('Default Todo')

     const handleChange = (e) => {
          setInputVal(e.target.value)
     }

     const handleOnSubmit = () => {
          setLiVal(inputVal)
     }

     return (
          <>
               <AddListItem handleOnChange={handleChange} handleSubmit={handleOnSubmit} />
               <List mainSetLi={liVal} />
          </>
     )
}

export default Main
=======
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
>>>>>>> 7069325c751bdb7d133543fdddcb4484e425c886
