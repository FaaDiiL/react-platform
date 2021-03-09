import { Route, Switch } from 'react-router-dom'

import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Projects from './Projects/Projects'

import styled from 'styled-components'

const StyledContainer = styled.div`
min-height: 75vh;
`

function Main() {
    return (
        <StyledContainer>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/about'><About /></Route>
                <Route path='/projects'><Projects /></Route>
                <Route path='/contact'><Contact /></Route>
            </Switch>
        </StyledContainer>
    )
}

export default Main
